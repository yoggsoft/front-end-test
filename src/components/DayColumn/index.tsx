import React from 'react';

import { ShiftItem } from '@/components';

import { Shift } from '@/@types';

interface DayColumnProps {
  day: string;
  shifts: Array<Shift>;
  moveShift: (id: string, newDay: string) => void;
  openContextMenu: (event: React.MouseEvent, task: Shift) => void;
}

export default function DayColumn ({ day, shifts, moveShift, openContextMenu }: DayColumnProps) {
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('taskId');

    if (taskId) {
      moveShift(taskId, day);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className='p-4 bg-white w-64 border-r-0 border last:border-r-1'
    >
      <h2 className='text-lg font-bold mb-2'>{day}</h2>
      {shifts.map((task) => (
        <ShiftItem
          key={task.id}
          task={task}
          onContextMenu={(event) => {
            event.preventDefault();
            openContextMenu(event, task);
          }}
          onDragStart={(event, task) => {
            event.dataTransfer.setData('taskId', task.id);
          }}
        />
      ))}
    </div>
  );
};
