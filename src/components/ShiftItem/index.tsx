import React from 'react';
import cx from 'classnames';
import { Shift } from '@/@types';

import { Icon } from '@/components';
import { faClock, faCirclePause, faMoneyBill, faEuroSign } from '@fortawesome/free-solid-svg-icons';

interface ShiftItemProps {
	task: Shift;
  onContextMenu: (event: React.MouseEvent) => void;
  onDragStart: (event: React.DragEvent, task: Shift) => void;
}

export default function ShiftItem ({ task, onContextMenu, onDragStart }: ShiftItemProps) {
  const { id, type, pauseDuration, duration, startTime, endTime, wage } = task;

  return (
    <div
      data-id={id}
      draggable
      onDragStart={(event) => onDragStart(event, task)}
      className={cx(
        'p-2 rounded cursor-pointer mb-2',
        type === 'caisse' && 'bg-lime',
        type === 'fermeture' && 'bg-grey-light',
        type === 'camion' && ' bg-sky'
      )}
      onContextMenu={onContextMenu}
    >
      <div className='font-semibold mb-1'>
        {startTime} - {endTime}
      </div>
      <div className='flex gap-2 mb-2 text-sm whitespace-no-wrap text-gray-400'>
        <span className='flex justify-center items-center gap-1'>
          <Icon iconName={faClock} size='sm' />
          {duration}
        </span>
        <span className='flex justify-center items-center gap-1'>
          <Icon iconName={faCirclePause} size='sm' />
          {pauseDuration}
        </span>
        <span className='flex justify-center items-center gap-1'>
          <Icon iconName={faMoneyBill} size='sm' />
          {wage}
          <Icon iconName={faEuroSign} size='sm' />
        </span>
      </div>
      <div className={cx(
        'rounded px-2 p-0.5 font-semibold text-sm',
        type === 'caisse' && 'bg-emerald',
        type === 'fermeture' && 'bg-magenta text-white',
        type === 'camion' && ' bg-sky',
        type === 'ouverture' && ' bg-orange'
      )}>
        {type}
      </div>
    </div>
  );
};