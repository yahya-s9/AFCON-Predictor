import { Match, Team, TournamentState } from '../types/tournament';

// Generate a unique ID for matches
const generateMatchId = (round: string, matchNumber: number): string => {
  return `${round}-${matchNumber}`;
};

// Create initial tournament state with groups and empty matches
export const createInitialTournamentState = (teams: Team[]): TournamentState => {
  // Group teams by their group
  const groupsMap = teams.reduce((acc, team) => {
    if (!team.group) return acc;
    
    if (!acc[team.group]) {
      acc[team.group] = [];
    }
    
    acc[team.group].push(team);
    return acc;
  }, {} as Record<string, Team[]>);
  
  // Convert to array format
  const groups = Object.entries(groupsMap).map(([name, teams]) => ({
    name,
    teams: teams.sort((a, b) => (a.position || 0) - (b.position || 0))
  }));
  
  // Create empty matches array
  const matches: Match[] = [];
  
  // Create empty third place teams array
  const thirdPlaceTeams: Team[] = [];
  
  return {
    groups,
    matches,
    thirdPlaceTeams
  };
};

interface Group {
  name: string;
  teams: Team[];
}

interface RoundOf16Match {
  matchNumber: number;
  homeTeam: Team;
  awayTeam: Team;
}

// Lookup table for third-placed team assignments based on qualifying groups
// Each key is a sorted string of the four qualifying group letters (e.g., 'ABCD')
// Each value is an array of the group letters for 3rd place teams in the order: [for 1A, 1B, 1C, 1D]
const thirdPlaceAssignmentTable: Record<string, [string, string, string, string]> = {
  'ABCD': ['C', 'D', 'A', 'B'],
  'ABCE': ['C', 'A', 'B', 'E'],
  'ABCF': ['C', 'A', 'B', 'F'],
  'ABDE': ['D', 'A', 'B', 'E'],
  'ABDF': ['D', 'A', 'B', 'F'],
  'ABEF': ['E', 'A', 'B', 'F'],
  'ACDE': ['D', 'C', 'A', 'E'],
  'ACDF': ['D', 'C', 'A', 'F'],
  'ACEF': ['E', 'C', 'A', 'F'],
  'ADEF': ['E', 'D', 'A', 'F'],
  'BCDE': ['D', 'C', 'B', 'E'],
  'BCDF': ['D', 'C', 'B', 'F'],
  'BCEF': ['E', 'C', 'B', 'F'],
  'BDEF': ['E', 'D', 'B', 'F'],
  'CDEF': ['E', 'D', 'C', 'F'],
};

// Returns the 3rd place teams in the correct order for the bracket: [for 1A, 1B, 1C, 1D]
function getThirdPlaceAssignment(qualifiedGroups: string[], thirdPlaceTeams: Team[]): Team[] {
  const key = qualifiedGroups.slice().sort().join('');
  const assignment = thirdPlaceAssignmentTable[key];
  if (!assignment) {
    throw new Error(`Invalid third-place group combination: ${qualifiedGroups.join(',')}`);
  }
  // For each slot, find the team from the correct group
  return assignment.map(groupLetter => {
    const team = thirdPlaceTeams.find(t => t.group === groupLetter);
    if (!team) throw new Error(`No third-place team found for group ${groupLetter}`);
    return team;
  });
}

export function generateRoundOf16Matches(groups: Group[], thirdPlaceTeams: Team[]): RoundOf16Match[] {
  // Get top 2 teams from each group
  const groupWinners = groups.map(group => group.teams[0]);
  const groupRunnersUp = groups.map(group => group.teams[1]);

  // Get the group letters of the qualified third-place teams
  const qualifiedThirdPlaceGroups = thirdPlaceTeams.slice(0, 4).map(team => team.group).filter(Boolean) as string[];
  // Get the third-place teams in the correct order for the bracket
  const assignedThirdPlaceTeams = getThirdPlaceAssignment(qualifiedThirdPlaceGroups, thirdPlaceTeams);

  // Round of 16 matches based on AFCON 2023 format and official table
  const matches: RoundOf16Match[] = [
    // Match 1: 2A vs 2C
    {
      matchNumber: 1,
      homeTeam: groupRunnersUp[0], // 2A
      awayTeam: groupRunnersUp[2], // 2C
    },
    // Match 2: 1D vs 3rd place assigned to 1D
    {
      matchNumber: 2,
      homeTeam: groupWinners[3], // 1D
      awayTeam: assignedThirdPlaceTeams[3],
    },
    // Match 3: 1B vs 3rd place assigned to 1B
    {
      matchNumber: 3,
      homeTeam: groupWinners[1], // 1B
      awayTeam: assignedThirdPlaceTeams[1],
    },
    // Match 4: 1F vs 2E
    {
      matchNumber: 4,
      homeTeam: groupWinners[5], // 1F
      awayTeam: groupRunnersUp[4], // 2E
    },
    // Match 5: 1A vs 3rd place assigned to 1A
    {
      matchNumber: 5,
      homeTeam: groupWinners[0], // 1A
      awayTeam: assignedThirdPlaceTeams[0],
    },
    // Match 6: 2B vs 2F
    {
      matchNumber: 6,
      homeTeam: groupRunnersUp[1], // 2B
      awayTeam: groupRunnersUp[5], // 2F
    },
    // Match 7: 1C vs 3rd place assigned to 1C
    {
      matchNumber: 7,
      homeTeam: groupWinners[2], // 1C
      awayTeam: assignedThirdPlaceTeams[2],
    },
    // Match 8: 2D vs 1E
    {
      matchNumber: 8,
      homeTeam: groupRunnersUp[3], // 2D
      awayTeam: groupWinners[4], // 1E
    },
  ];

  return matches;
}

// Generate quarter final matches
export const generateQuarterFinals = (): Match[] => {
  const matches: Match[] = [];
  
  // Create 4 quarter final matches
  for (let i = 1; i <= 4; i++) {
    const matchId = generateMatchId('QUARTER_FINAL', i);
    const nextMatchId = generateMatchId('SEMI_FINAL', Math.ceil(i / 2));
    
    matches.push({
      id: matchId,
      homeTeam: null,
      awayTeam: null,
      round: 'QUARTER_FINAL',
      matchNumber: i,
      nextMatchId
    });
  }
  
  return matches;
};

// Generate semi final matches
export const generateSemiFinals = (): Match[] => {
  const matches: Match[] = [];
  
  // Create 2 semi final matches
  for (let i = 1; i <= 2; i++) {
    const matchId = generateMatchId('SEMI_FINAL', i);
    const nextMatchId = generateMatchId('FINAL', 1);
    
    matches.push({
      id: matchId,
      homeTeam: null,
      awayTeam: null,
      round: 'SEMI_FINAL',
      matchNumber: i,
      nextMatchId
    });
  }
  
  return matches;
};

// Generate final match
export const generateFinal = (): Match[] => {
  const matches: Match[] = [];
  
  // Create final match
  const matchId = generateMatchId('FINAL', 1);
  
  matches.push({
    id: matchId,
    homeTeam: null,
    awayTeam: null,
    round: 'FINAL',
    matchNumber: 1
  });
  
  return matches;
};

// Generate third place match
export const generateThirdPlaceMatch = (): Match[] => {
  const matches: Match[] = [];
  
  // Create third place match
  const matchId = generateMatchId('THIRD_PLACE', 1);
  
  matches.push({
    id: matchId,
    homeTeam: null,
    awayTeam: null,
    round: 'THIRD_PLACE',
    matchNumber: 1,
    isThirdPlaceMatch: true
  });
  
  return matches;
};

// Generate complete tournament bracket
export const generateTournamentBracket = (state: TournamentState): TournamentState => {
  // Generate all rounds
  const roundOf16Matches = generateRoundOf16Matches(state.groups, state.thirdPlaceTeams);
  const quarterFinalMatches = generateQuarterFinals();
  const semiFinalMatches = generateSemiFinals();
  const finalMatch = generateFinal();
  const thirdPlaceMatch = generateThirdPlaceMatch();
  
  // Combine all matches
  const allMatches = [
    ...roundOf16Matches.map(match => ({
      id: generateMatchId('ROUND_OF_16', match.matchNumber),
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
      round: 'ROUND_OF_16',
      matchNumber: match.matchNumber,
      nextMatchId: generateMatchId('QUARTER_FINAL', Math.ceil(match.matchNumber / 2))
    })),
    ...quarterFinalMatches,
    ...semiFinalMatches,
    ...finalMatch,
    ...thirdPlaceMatch
  ];
  
  // Update state with matches
  return {
    ...state,
    matches: allMatches
  };
};

// Test function to verify third-place team matchups
export function testThirdPlaceMatchups() {
  console.log('Testing third-place team matchups using the official lookup table...\n');

  Object.entries(thirdPlaceAssignmentTable).forEach(([key, expectedAssignment], index) => {
    const qualifiedGroups = key.split('');
    // Create mock third-place teams for these groups
    const mockThirdPlaceTeams = qualifiedGroups.map(group => ({
      id: `team-${group}`,
      name: `Team ${group}`,
      group: group,
      position: 1,
      flag: `flag-${group.toLowerCase()}`
    }));

    // Create mock groups (not used in assignment, but required by function signature)
    const mockGroups = ['A', 'B', 'C', 'D', 'E', 'F'].map(name => ({
      name: `Group ${name}`,
      teams: []
    }));

    // Get the actual assignment from the function
    const actualAssignment = getThirdPlaceAssignment(qualifiedGroups, mockThirdPlaceTeams);
    const actualGroups = actualAssignment.map(team => team.group);

    // Compare expected vs actual
    const isCorrect = actualGroups.every((group, i) => group === expectedAssignment[i]);

    console.log(`Test Case ${index + 1}:`);
    console.log(`Qualified Groups: ${qualifiedGroups.join(', ')}`);
    console.log(`Expected Assignment: ${expectedAssignment.join(', ')}`);
    console.log(`Actual Assignment:   ${actualGroups.join(', ')}`);
    console.log(`Result: ${isCorrect ? '✅ Correct' : '❌ Incorrect'}\n`);
  });
} 