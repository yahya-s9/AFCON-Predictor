import React, { useState } from 'react';
import { Group, Team, GroupStanding, ThirdPlaceRanking as ThirdPlaceRankingType, Match } from './types/tournament';
import { DraggableGroup } from './components/DraggableGroup';
import { ThirdPlaceRanking } from './components/ThirdPlaceRanking';
import { Bracket } from './components/Bracket';
import { getTeamsByGroup } from './data/teams';
import { generateBracket } from './utils/bracketGenerator';
import './App.css';

function App() {
  const [groupStandings, setGroupStandings] = useState<GroupStanding[]>(
    ['A', 'B', 'C', 'D', 'E', 'F'].map(group => ({
      group: group as Group,
      teams: getTeamsByGroup(group as Group)
    }))
  );

  const [thirdPlaceRankings, setThirdPlaceRankings] = useState<ThirdPlaceRankingType[]>(
    groupStandings.map(standing => ({
      group: standing.group,
      team: standing.teams[2],
      rank: 0
    }))
  );

  const [bracket, setBracket] = useState<Match[]>([]);
  const [showBracket, setShowBracket] = useState(false);

  const handleTeamsReorder = (group: Group, teams: Team[]) => {
    setGroupStandings(prev => 
      prev.map(standing => 
        standing.group === group 
          ? { ...standing, teams } 
          : standing
      )
    );
  };

  const handleGenerateBracket = () => {
    const newBracket = generateBracket(groupStandings, thirdPlaceRankings);
    setBracket(newBracket.matches);
    setShowBracket(true);
  };

  const handleMatchWinnerSelect = (matchId: string, winner: Team) => {
    setBracket(prev => {
      const updatedMatches = prev.map(match => {
        if (match.id === matchId) {
          return { ...match, winner };
        }
        // If this match's winner advances to another match, update that match's teams
        if (match.id === prev.find(m => m.id === matchId)?.nextMatchId) {
          const isFirstTeam = prev.find(m => m.id === matchId)?.team1?.name === winner.name;
          return {
            ...match,
            [isFirstTeam ? 'team1' : 'team2']: winner
          };
        }
        return match;
      });
      return updatedMatches;
    });
  };

  return (
    <div className="app">
      <header>
        <h1>AFCON 2024 Predictor</h1>
        <p>Predict the outcome of the Africa Cup of Nations 2024 tournament</p>
      </header>

      <main>
        <section className="groups-section">
          <h2>Group Stage</h2>
          <div className="groups-grid">
            {groupStandings.map(standing => (
              <DraggableGroup
                key={standing.group}
                group={standing.group}
                teams={standing.teams}
                onTeamsReorder={handleTeamsReorder}
              />
            ))}
          </div>
        </section>

        <section className="third-place-section">
          <ThirdPlaceRanking
            thirdPlaceTeams={thirdPlaceRankings}
            onRankingChange={setThirdPlaceRankings}
          />
        </section>

        <section className="bracket-section">
          <button 
            className="generate-bracket-btn"
            onClick={handleGenerateBracket}
            disabled={showBracket}
          >
            Generate Bracket
          </button>

          {showBracket && (
            <Bracket
              matches={bracket}
              onMatchWinnerSelect={handleMatchWinnerSelect}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
