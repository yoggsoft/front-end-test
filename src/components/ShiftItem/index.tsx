import React from 'react';
import cx from 'classnames';
import { Shift } from '@/@types';

import { Icon } from '@/components';
import { faClock, faCirclePause, faMoneyBill, faEuroSign, faWarning, faR, faC } from '@fortawesome/free-solid-svg-icons';

interface ShiftItemProps {
	task: Shift;
  onContextMenu: (event: React.MouseEvent) => void;
  onDragStart: (event: React.DragEvent, task: Shift) => void;
}

export default function ShiftItem ({ task, onContextMenu, onDragStart }: ShiftItemProps) {
  const { id, type, pauseDuration, duration, startTime, endTime, wage } = task;

  const dragableProps = {
    draggable: true,
    onDragStart: (event: React.DragEvent) => onDragStart(event, task),
    onContextMenu: onContextMenu
  }

  if (type === 'indisponible') {
    return (
      <div
        className='p-2 border rounded uppercase bg-grey-light text-gray-400'
        {...dragableProps}
      >
        <span>{type}</span>
      </div>
    )
  }

  if (
    type === 'conge' ||
    type === 'recuperation'
  ) {
    return (
      <div
        data-id={id}
        className='p-2 rounded cursor-pointer mb-2 bg-stripe'
        {...dragableProps}
      >
        <div className='flex gap-1 mb-2 text-sm whitespace-no-wrap text-gray-400'>
          <span className='text-black font-bold text-2xl uppercase'>
            {type[0]}{/* ugly, but don't wanna do icons for the type of shift assignment */}
          </span>
          <span className='flex justify-center items-center gap-1'>
            <Icon iconName={faClock} size='sm' />
            {duration}
          </span>
        </div>
        <div className='flex gap-1 mb-2 text-sm font-semibold text-gray-400 capitalize'>{type}</div>
      </div>
    )
  }

  return (
    <div
      data-id={id}
      {...dragableProps}
      className={cx(
        'p-2 rounded cursor-pointer mb-2',
        type === 'caisse' && 'bg-lime',
        type === 'camion' && 'bg-lime',
        type === 'ouverture' && 'bg-lime',
        type === 'fermeture' && 'bg-grey-light'
      )}
    >
      <div className='font-semibold mb-1 flex justify-between items-center'>
        <span>
          {startTime} - {endTime}
        </span>
        {
          type === 'ouverture' && (<Icon iconName={faWarning} color='orange' />)
        }
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
