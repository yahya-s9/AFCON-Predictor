export interface Team {
  id: string;
  name: string;
  flag: string;
  group?: string;
  position?: number;
}

export interface Match {
  id: string;
  homeTeam: Team | null;
  awayTeam: Team | null;
  homeScore?: number;
  awayScore?: number;
  round: string;
  matchNumber: number;
  nextMatchId?: string;
  isThirdPlaceMatch?: boolean;
}

export interface Group {
  name: string;
  teams: Team[];
}

export interface TournamentState {
  groups: Group[];
  matches: Match[];
  thirdPlaceTeams: Team[];
} 