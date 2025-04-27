import React from 'react';
import { Match, Team } from '../types/tournament';

interface BracketProps {
  matches: Match[];
  onMatchUpdate: (matchId: string, homeTeam: Team | null, awayTeam: Team | null) => void;
}

const Bracket: React.FC<BracketProps> = ({ matches, onMatchUpdate }) => {
  // Group matches by round
  const matchesByRound = matches.reduce((acc, match) => {
    if (!acc[match.round]) {
      acc[match.round] = [];
    }
    acc[match.round].push(match);
    return acc;
  }, {} as Record<string, Match[]>);
  
  // Sort rounds in the correct order
  const roundOrder = ['ROUND_OF_16', 'QUARTER_FINAL', 'SEMI_FINAL', 'FINAL', 'THIRD_PLACE'];
  const sortedRounds = roundOrder.filter(round => matchesByRound[round]);
  
  // Handle team selection for a match
  const handleTeamSelect = (matchId: string, isHome: boolean, team: Team | null) => {
    const match = matches.find(m => m.id === matchId);
    if (!match) return;
    
    if (isHome) {
      onMatchUpdate(matchId, team, match.awayTeam);
    } else {
      onMatchUpdate(matchId, match.homeTeam, team);
    }
  };
  
  // Get the winner of a match
  const getMatchWinner = (match: Match): Team | null => {
    if (!match.homeTeam || !match.awayTeam) return null;
    
    // If scores are set, determine winner by score
    if (match.homeScore !== undefined && match.awayScore !== undefined) {
      if (match.homeScore > match.awayScore) return match.homeTeam;
      if (match.awayScore > match.homeScore) return match.awayTeam;
      return null; // Draw
    }
    
    return null; // No winner yet
  };
  
  // Update the next match when a winner is determined
  const updateNextMatch = (match: Match) => {
    const winner = getMatchWinner(match);
    if (!winner || !match.nextMatchId) return;
    
    const nextMatch = matches.find(m => m.id === match.nextMatchId);
    if (!nextMatch) return;
    
    // Determine if winner goes to home or away team in next match
    const isHomeTeam = match.matchNumber % 2 === 1;
    
    if (isHomeTeam) {
      onMatchUpdate(nextMatch.id, nextMatch.homeTeam, winner);
    } else {
      onMatchUpdate(nextMatch.id, winner, nextMatch.awayTeam);
    }
  };
  
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-8 p-4 min-w-max">
        {sortedRounds.map((round) => (
          <div key={round} className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-center mb-2">
              {round.replace('_', ' ')}
            </h3>
            <div className="space-y-8">
              {matchesByRound[round].map((match) => (
                <div 
                  key={match.id} 
                  className={`bg-white rounded-lg shadow-md p-4 ${match.isThirdPlaceMatch ? 'border-2 border-yellow-400' : ''}`}
                >
                  <div className="text-center text-sm text-gray-500 mb-2">
                    Match {match.matchNumber}
                  </div>
                  <div className="space-y-2">
                    {/* Home Team */}
                    <div className="flex items-center cursor-pointer hover:bg-green-100 rounded transition"
                      onClick={() => {
                        if (match.homeTeam && match.awayTeam) {
                          // Advance home team
                          onMatchUpdate(match.id, match.homeTeam, match.awayTeam);
                          // Propagate winner to next round
                          if (match.nextMatchId) {
                            const nextMatch = matches.find(m => m.id === match.nextMatchId);
                            if (nextMatch) {
                              const isHome = match.matchNumber % 2 === 1;
                              if (isHome) {
                                onMatchUpdate(nextMatch.id, nextMatch.homeTeam, match.homeTeam);
                              } else {
                                onMatchUpdate(nextMatch.id, match.homeTeam, nextMatch.awayTeam);
                              }
                            }
                          }
                        }
                      }}
                    >
                      <div className="w-6 h-6 flex items-center justify-center mr-2">
                        {match.homeTeam?.flag}
                      </div>
                      <span className="font-medium">
                        {match.homeTeam ? match.homeTeam.name : <span className="text-gray-400">TBD</span>}
                      </span>
                    </div>
                    
                    {/* Away Team */}
                    <div className="flex items-center cursor-pointer hover:bg-green-100 rounded transition"
                      onClick={() => {
                        if (match.homeTeam && match.awayTeam) {
                          // Advance away team
                          onMatchUpdate(match.id, match.homeTeam, match.awayTeam);
                          // Propagate winner to next round
                          if (match.nextMatchId) {
                            const nextMatch = matches.find(m => m.id === match.nextMatchId);
                            if (nextMatch) {
                              const isHome = match.matchNumber % 2 === 1;
                              if (isHome) {
                                onMatchUpdate(nextMatch.id, nextMatch.homeTeam, match.awayTeam);
                              } else {
                                onMatchUpdate(nextMatch.id, match.awayTeam, nextMatch.awayTeam);
                              }
                            }
                          }
                        }
                      }}
                    >
                      <div className="w-6 h-6 flex items-center justify-center mr-2">
                        {match.awayTeam?.flag}
                      </div>
                      <span className="font-medium">
                        {match.awayTeam ? match.awayTeam.name : <span className="text-gray-400">TBD</span>}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bracket; 