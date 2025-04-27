import React from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Team } from '../types/tournament';
import DraggableTeam from './DraggableTeam';

interface ThirdPlaceRankingProps {
  teams: Team[];
  onTeamsReorder: (teams: Team[]) => void;
}

const ThirdPlaceRanking: React.FC<ThirdPlaceRankingProps> = ({ teams, onTeamsReorder }) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over || active.id === over.id) {
      return;
    }
    
    const oldIndex = teams.findIndex(team => team.id === active.id);
    const newIndex = teams.findIndex(team => team.id === over.id);
    
    if (oldIndex === -1 || newIndex === -1) {
      return;
    }
    
    const newTeams = [...teams];
    const [removed] = newTeams.splice(oldIndex, 1);
    newTeams.splice(newIndex, 0, removed);
    
    // Update positions
    const updatedTeams = newTeams.map((team, index) => ({
      ...team,
      position: index + 1
    }));
    
    onTeamsReorder(updatedTeams);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">Third Place Ranking</h3>
      <p className="text-sm text-gray-600 mb-4">
        Drag and drop to rank the third-place teams. The top 4 teams will advance to the Round of 16.
      </p>
      
      {teams.length === 0 ? (
        <div className="text-center text-gray-500 py-4">
          No third-place teams available yet. Complete the group stages first.
        </div>
      ) : (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={teams.map(team => team.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-2">
              {teams.map((team) => (
                <DraggableTeam key={team.id} team={team} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
};

export default ThirdPlaceRanking; 