import React, { useState } from 'react';
import { Bracket, IRoundProps, IRenderSeedProps } from 'react-brackets';

const teams = [
  { name: '🇪🇬 Egypt' },
  { name: '🇳🇬 Nigeria' },
  { name: '🇸🇳 Senegal' },
  { name: '🇲🇦 Morocco' },
  { name: '🇨🇮 Ivory Coast' },
  { name: '🇩🇿 Algeria' },
  { name: '🇹🇳 Tunisia' },
  { name: '🇨🇲 Cameroon' },
  { name: '🇬🇭 Ghana' },
  { name: '🇿🇦 South Africa' },
  { name: '🇲🇱 Mali' },
  { name: '🇧🇫 Burkina Faso' },
  { name: '🇨🇩 DR Congo' },
  { name: '🇬🇳 Guinea' },
  { name: '🇨🇻 Cape Verde' },
  { name: '🇿🇲 Zambia' },
];

const initialRounds: IRoundProps[] = [
  {
    title: 'Round of 16',
    seeds: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      date: '2024-01-03',
      teams: [teams[i * 2], teams[i * 2 + 1]],
    })),
  },
  {
    title: 'Quarter Finals',
    seeds: Array.from({ length: 4 }, (_, i) => ({
      id: 9 + i,
      date: '2024-01-09',
      teams: [
        { name: '' },
        { name: '' },
      ],
    })),
  },
  {
    title: 'Semi Finals',
    seeds: Array.from({ length: 2 }, (_, i) => ({
      id: 13 + i,
      date: '2024-01-14',
      teams: [
        { name: '' },
        { name: '' },
      ],
    })),
  },
  {
    title: 'Final',
    seeds: [
      {
        id: 15,
        date: '2024-01-18',
        teams: [
          { name: '' },
          { name: '' },
        ],
      },
    ],
  },
];

const BracketDemo: React.FC = () => {
  const [rounds, setRounds] = useState<IRoundProps[]>(initialRounds);
  const [champion, setChampion] = useState<string>('');

  // Helper to advance a team to the next round
  const handleTeamClick = (roundIdx: number, seedIdx: number, teamIdx: number) => {
    if (roundIdx >= rounds.length - 1) return;
    const winner = rounds[roundIdx].seeds[seedIdx].teams[teamIdx];
    const nextRoundIdx = roundIdx + 1;
    const nextSeedIdx = Math.floor(seedIdx / 2);
    const nextTeamIdx = seedIdx % 2;
    setRounds(prevRounds => {
      const newRounds = prevRounds.map((r, i) => ({ ...r, seeds: r.seeds.map(s => ({ ...s, teams: [...s.teams] })) }));
      newRounds[nextRoundIdx].seeds[nextSeedIdx].teams[nextTeamIdx] = { ...winner };
      // For all downstream rounds, only clear a slot if the previous pick is no longer a valid option
      for (let r = nextRoundIdx + 1; r < newRounds.length; r++) {
        newRounds[r].seeds.forEach((seed, sIdx) => {
          seed.teams.forEach((team, tIdx) => {
            // If the team in this slot is not present in the previous round's corresponding matchup, clear it
            const prevMatchup = newRounds[r - 1].seeds[Math.floor(sIdx / 2)].teams;
            if (!team.name || prevMatchup.some(t => t.name === team.name)) {
              // Keep the team if still present
              return;
            } else {
              seed.teams[tIdx] = { name: '' };
            }
          });
        });
      }
      // If this is the final, set the champion
      if (nextRoundIdx === newRounds.length - 1) {
        setChampion('');
      }
      return newRounds;
    });
  };

  // Handle click in the final
  const handleFinalClick = (seedIdx: number, teamIdx: number) => {
    const team = rounds[rounds.length - 1].seeds[seedIdx].teams[teamIdx];
    if (!team.name) return;
    setChampion(team.name);
  };

  // Custom renderSeed to make teams clickable
  const renderSeed = (props: IRenderSeedProps) => {
    const { seed, roundIndex, seedIndex } = props;
    // Determine if a team is the winner of this match (advanced to next round)
    const isWinner = (teamIdx: number) => {
      if (roundIndex >= rounds.length - 1) return false;
      const winner = rounds[roundIndex + 1].seeds[Math.floor(seedIndex / 2)].teams[seedIndex % 2]?.name;
      return seed.teams[teamIdx].name && seed.teams[teamIdx].name === winner;
    };
    // Determine if a team is the champion
    const isChampion = (teamName?: string) => champion && teamName === champion;
    // Only allow picking a winner if all matches in this round have both teams set
    const roundUnlocked = rounds[roundIndex].seeds.every(
      s => s.teams[0].name && s.teams[1].name
    );
    return (
      <div
        style={{
          boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
          borderRadius: 8,
          background: '#fff',
          margin: '12px 0',
          padding: 8,
          transition: 'box-shadow 0.2s',
          width: '180px',
          minHeight: '56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        onMouseOver={e => (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)')}
        onMouseOut={e => (e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.06)')}
      >
        {seed.teams.map((team: { name?: string }, teamIdx: number) => {
          const bothTeamsSet = seed.teams[0].name && seed.teams[1].name;
          let bg = team.name ? '#f0f0f0' : 'transparent';
          if (isChampion(team.name)) bg = 'gold';
          else if (isWinner(teamIdx)) bg = '#b6fcb6';
          const canPick = bothTeamsSet && roundUnlocked;
          return (
            <div
              key={teamIdx}
              style={{
                cursor: team.name && canPick ? 'pointer' : 'not-allowed',
                padding: 4,
                margin: 2,
                borderRadius: 4,
                background: bg,
                fontWeight: isChampion(team.name) || champion === team.name ? 'bold' : 'normal',
                border: isChampion(team.name)
                  ? '2px solid #d4af37'
                  : isWinner(teamIdx)
                  ? '2px solid #2e7d32'
                  : '1px solid #ccc',
                color: isChampion(team.name) ? '#2e2e2e' : undefined,
                opacity: canPick ? 1 : 0.5,
              }}
              onClick={() => {
                if (!canPick) return;
                if (roundIndex === rounds.length - 1) {
                  handleFinalClick(seedIndex, teamIdx);
                } else {
                  team.name && handleTeamClick(roundIndex, seedIndex, teamIdx);
                }
              }}
            >
              {team.name ? team.name : <span style={{ color: '#bbb' }}>TBD</span>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
        <button
          style={{
            padding: '8px 20px',
            borderRadius: 6,
            border: '1px solid #888',
            background: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          }}
          onClick={() => {
            setRounds(initialRounds);
            setChampion('');
          }}
        >
          Reset Bracket
        </button>
      </div>
      <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <style>{`
            .bracket-rounds {
              display: flex;
              width: 100%;
              justify-content: space-between;
            }
            .bracket-rounds > div {
              flex: 1 1 0 !important;
              min-width: 0 !important;
              width: 100% !important;
              max-width: none !important;
            }
          `}</style>
          <Bracket rounds={rounds} renderSeedComponent={renderSeed} />
          {champion && <div style={{ marginTop: 24, fontWeight: 'bold', fontSize: 18, color: '#2e7d32', textAlign: 'center' }}>🏆 {champion} Wins!</div>}
        </div>
      </div>
    </>
  );
};

export default BracketDemo; 