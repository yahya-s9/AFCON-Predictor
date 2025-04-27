import { useState } from 'react'
import './App.css'
import { teams as initialTeams } from './data/teams'
import { Team } from './types/tournament'
import DraggableGroup from './components/DraggableGroup'
import ThirdPlaceRanking from './components/ThirdPlaceRanking'
import { generateRoundOf16Matches } from './utils/bracketGenerator'
import { Routes, Route, useNavigate } from 'react-router-dom'
import BracketPage from './components/BracketPage'
import BracketDemo from './components/BracketDemo'

function HomePage() {
  const [groups, setGroups] = useState(() => {
    // Create initial groups from teams
    const groups = ['A', 'B', 'C', 'D', 'E', 'F'].map(groupName => ({
      name: `Group ${groupName}`,
      teams: initialTeams.filter(team => team.group === groupName)
    }));
    return groups;
  });

  const [thirdPlaceTeams, setThirdPlaceTeams] = useState<Team[]>(() => {
    // Initialize with third-place teams from each group
    return groups.map(group => ({
      ...group.teams[2], // Get the third team (index 2) from each group
      position: 1 // Initial position
    }));
  });
  
  // Handle team reordering within a group
  const handleTeamsReorder = (groupName: string, updatedTeams: Team[]) => {
    setGroups(prevGroups => {
      const newGroups = prevGroups.map(group => 
        group.name === groupName 
          ? { ...group, teams: updatedTeams }
          : group
      );
      
      // Update third-place teams based on the new group order
      const newThirdPlaceTeams = newGroups.map(group => ({
        ...group.teams[2], // Get the third team from each group
        position: 1 // Reset position as it will be updated by the ranking component
      }));
      
      setThirdPlaceTeams(newThirdPlaceTeams);
      
      return newGroups;
    });
  };

  // Handle third-place teams reordering
  const handleThirdPlaceTeamsReorder = (updatedTeams: Team[]) => {
    setThirdPlaceTeams(updatedTeams);
  };

  const navigate = useNavigate();

  const handleGenerateBracket = () => {
    const roundOf16Matches = generateRoundOf16Matches(groups, thirdPlaceTeams);
    console.log('Round of 16 Matches:');
    roundOf16Matches.forEach(match => {
      console.log(`Match ${match.matchNumber}: ${match.homeTeam.name} vs ${match.awayTeam.name}`);
    });
    // Navigate to bracket page, passing state
    navigate('/bracket', { state: { groups, thirdPlaceTeams } });
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">AFCON 2023 Predictor</h1>
        <p className="subtitle">Drag and drop teams to predict the tournament outcome</p>
      </header>
      
      <div className="main-content">
        <div>
          <h2 className="section-title">Group Stages</h2>
          <div className="groups-grid">
            {groups.map(group => (
              <DraggableGroup
                key={group.name}
                groupName={group.name}
                teams={group.teams}
                onTeamsReorder={(teams) => handleTeamsReorder(group.name, teams)}
              />
            ))}
          </div>

          <div className="third-place-section">
            <ThirdPlaceRanking
              teams={thirdPlaceTeams}
              onTeamsReorder={handleThirdPlaceTeamsReorder}
            />
          </div>
        </div>

        <div className="button-container">
          <button
            onClick={handleGenerateBracket}
            className="generate-button"
          >
            Generate Bracket
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bracket" element={<BracketPage />} />
      <Route path="/demo" element={<BracketDemo />} />
    </Routes>
  );
}

export default App
