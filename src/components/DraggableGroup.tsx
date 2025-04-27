import React from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Team } from '../types/tournament';
import DraggableTeam from './DraggableTeam';

interface DraggableGroupProps {
  teams: Team[];
  onTeamsReorder: (teams: Team[]) => void;
  groupName: string;
}

const DraggableGroup: React.FC<DraggableGroupProps> = ({ teams, onTeamsReorder, groupName }) => {
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
      <h3 className="text-lg font-bold mb-2">Group {groupName}</h3>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={teams.map(team => team.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {teams.map((team) => (
              <DraggableTeam key={team.id} team={team} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DraggableGroup; 