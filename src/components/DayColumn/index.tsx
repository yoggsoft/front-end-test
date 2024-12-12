import React from 'react';

import { ShiftItem } from '@/components';

import { Shift } from '@/@types';

interface DayColumnProps {
  day: string;
  shifts: Array<Shift>;
  moveShift: (id: string, newDay: string) => void;
  openContextMenu: (event: React.MouseEvent, shift: Shift) => void;
}

export default function DayColumn ({
  day, shifts, moveShift, openContextMenu
}: DayColumnProps) {
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const shiftId = event.dataTransfer.getData('shiftId');

    if (shiftId) {
      moveShift(shiftId, day);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className='p-4 bg-white w-64 border-t-2 border-b-2 border-l-2 last:border-r-2'
    >
      <h2 className='text-lg font-bold mb-2'>{day}</h2>
      {shifts.map((shift) => (
        <ShiftItem
          key={shift.id}
          shift={shift}
          onContextMenu={(event) => {
            event.preventDefault();
            openContextMenu(event, shift);
          }}
          onDragStart={(event, shift) => {
            event.dataTransfer.setData('shiftId', shift.id);
          }}
        />
      ))}
    </div>
  );
};
