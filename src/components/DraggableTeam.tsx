import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Team } from '../types/tournament';

interface DraggableTeamProps {
  team: Team;
}

const DraggableTeam: React.FC<DraggableTeamProps> = ({ team }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: team.id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab'
  };
  
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center p-2 bg-gray-100 rounded-md hover:bg-gray-200 border border-black"
    >
      <div className="flex items-center gap-3 flex-1">
        <span className="text-2xl">{team.flag}</span>
        <span className="font-medium">{team.name}</span>
      </div>
      {/* <div className="text-sm text-gray-500">Position: {team.position}</div> */}
    </div>
  );
};

export default DraggableTeam; 