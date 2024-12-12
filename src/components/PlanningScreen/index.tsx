'use client';
import React, { useState } from 'react';

import { Icon, DayColumn } from '@/components';
import { faCopy, faBars, faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Shift } from '@/@types';

const fakeData: Shift[] = [
  { id: '1', assignee: 'Alexandre Timmermans', type: 'caisse', duration: '7h30', pauseDuration: '30m', day: 'Monday', wage: '99', startTime: '7:00', endTime: '15:00' },
  { id: '2', assignee: 'Alexandre Timmermans', type: 'caisse', duration: '7h30', pauseDuration: '30m', day: 'Thursday', wage: '99', startTime: '7:00', endTime: '15:00' },
  { id: '3', assignee: 'Alexandre Timmermans', type: 'caisse', duration: '7h30', pauseDuration: '30m', day: 'Wednesday', wage: '99', startTime: '7:00', endTime: '15:00' },
  { id: '4', assignee: 'Alexandre Timmermans', type: 'caisse', duration: '7h30', pauseDuration: '30m', day: 'Sunday', wage: '99', startTime: '7:00', endTime: '15:00' },
  { id: '5', assignee: 'Alexandre Timmermans', type: 'fermeture', duration: '6h30', pauseDuration: '30m', day: 'Monday', wage: '85', startTime: '18:00', endTime: '1:00' },
  { id: '6', assignee: 'Alexandre Timmermans', type: 'fermeture', duration: '6h30', pauseDuration: '30m', day: 'Friday', wage: '85', startTime: '18:00', endTime: '1:00' },
  { id: '7', assignee: 'Alexandre Timmermans', type: 'fermeture', duration: '6h30', pauseDuration: '30m', day: 'Saturday', wage: '85', startTime: '18:00', endTime: '1:00' },
  { id: '8', assignee: 'Eloïse Leroy', type: 'standard', duration: '8h30', pauseDuration: '30m', day: 'Monday', wage: '128', startTime: '8:00', endTime: '17:00' },
  { id: '9', assignee: 'Eloïse Leroy', type: 'conge', duration: '12h40', pauseDuration: '', day: 'Wednesday', wage: '190', startTime: '', endTime: '' },
  { id: '10', assignee: 'Eloïse Leroy', type: 'conge', duration: '12h40', pauseDuration: '', day: 'Thursday', wage: '190', startTime: '', endTime: '' },
  { id: '11', assignee: 'Eloïse Leroy', type: 'conge', duration: '12h40', pauseDuration: '', day: 'Thursday', wage: '190', startTime: '', endTime: '' },
  { id: '12', assignee: 'Eloïse Leroy', type: 'conge', duration: '12h40', pauseDuration: '', day: 'Friday', wage: '190', startTime: '', endTime: '' },
  { id: '13', assignee: 'Eloïse Leroy', type: 'caisse', duration: '7h30', pauseDuration: '30m', day: 'Thursday', wage: '113', startTime: '7:00', endTime: '15:00' },
  { id: '14', assignee: 'Eloïse Leroy', type: 'conge', duration: '12h40', pauseDuration: '', day: 'Sunday', wage: '190', startTime: '8:00', endTime: '16-30' },
  { id: '15', assignee: 'Samuel Goosens', type: 'camion', duration: '7h30', pauseDuration: '30m', day: 'Monday', wage: '98', startTime: '7:00', endTime: '15:00' },
  { id: '16', assignee: 'Samuel Goosens', type: 'camion', duration: '7h30', pauseDuration: '30m', day: 'Tuesday', wage: '98', startTime: '7:00', endTime: '15:00' },
  { id: '17', assignee: 'Samuel Goosens', type: 'camion', duration: '7h30', pauseDuration: '30m', day: 'Wednesday', wage: '98', startTime: '7:00', endTime: '15:00' },
  { id: '18', assignee: 'Samuel Goosens', type: 'camion', duration: '7h30', pauseDuration: '30m', day: 'Friday', wage: '98', startTime: '7:00', endTime: '15:00' },
  { id: '19', assignee: 'Samuel Goosens', type: 'camion', duration: '7h30', pauseDuration: '30m', day: 'Saturday', wage: '98', startTime: '7:00', endTime: '15:00' },
  { id: '20', assignee: 'Samuel Goosens', type: 'camion', duration: '7h30', pauseDuration: '30m', day: 'Sunday', wage: '98', startTime: '7:00', endTime: '15:00' },
  { id: '21', assignee: 'Camille Delangre', type: 'fermeture', duration: '7h30', pauseDuration: '30m', day: 'Monday', wage: '120', startTime: '12:00', endTime: '20:00' },
  { id: '22', assignee: 'Camille Delangre', type: 'fermeture', duration: '7h30', pauseDuration: '30m', day: 'Thursday', wage: '120', startTime: '12:00', endTime: '20:00' },
  { id: '23', assignee: 'Camile Evrard', type: 'ouverture', duration: '7h30', pauseDuration: '30m', day: 'Wednesday', wage: '78', startTime: '7:00', endTime: '15:00' },
  { id: '24', assignee: 'Elena Dimou', type: 'indisponible', duration: '', pauseDuration: '', day: 'Wednesday', wage: '', startTime: '', endTime: '' },
  { id: '25', assignee: 'Elena Dimou', type: 'indisponible', duration: '', pauseDuration: '', day: 'Friday', wage: '', startTime: '', endTime: '' }
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function PlanningScreen () {
  const [tasks, setTasks] = useState<Shift[]>(fakeData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Shift | null>(null);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; task: Shift | null }>({ x: 0, y: 0, task: null });

  const moveTask = (id: string, newDay: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, day: newDay } : task
      )
    );
  };

  const openContextMenu = (event: React.MouseEvent, task: Shift) => {
    setContextMenu({ x: event.clientX, y: event.clientY, task });
  };

  const closeContextMenu = () => {
    setContextMenu({ x: 0, y: 0, task: null });
  };

  const editTask = (updatedTask: Shift) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setIsModalOpen(false);
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setContextMenu({ x: 0, y: 0, task: null });
  };

  const duplicateTask = (id: string) => {
    // setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    // setContextMenu({ x: 0, y: 0, task: null });
  };

  return (
    <div className='p-8' onClick={closeContextMenu}>
      <div className='flex'>
        {DAYS.map((day) => (
          <DayColumn
            key={day}
            day={day}
            shifts={tasks.filter((task) => task.day === day)}
            moveTask={moveTask}
            openContextMenu={openContextMenu}
          />
        ))}
      </div>
      <div className='flex'>
        {DAYS.map((day) => (
          <DayColumn
            key={day}
            day={day}
            shifts={tasks.filter((task) => task.day === day)}
            moveTask={moveTask}
            openContextMenu={openContextMenu}
          />
        ))}
      </div>
      {/* TODO move this modal */}
      {contextMenu.task && (
        <div
          className='absolute right-0 z-10 mt-2 py-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'
          style={{ top: contextMenu.y, left: contextMenu.x }}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
        >
          <button
            onClick={() => contextMenu.task && duplicateTask(contextMenu.task?.id)}
            className='block w-full text-left py-2 px-4 hover:bg-gray-100'
          >
            <Icon iconName={faCopy} />&nbsp;Copier
          </button>
          <button
            onClick={() => {
              setModalContent(contextMenu.task);
              setIsModalOpen(true);
              closeContextMenu();
            }}
            className='block w-full text-left py-2 px-4 hover:bg-gray-100'
          >
            <Icon iconName={faBars} />&nbsp;Edit
          </button>
          <button
            onClick={() => contextMenu.task && deleteTask(contextMenu.task?.id)}
            className='block w-full text-left py-2 px-4 hover:bg-gray-100 text-red'
          >
            <Icon iconName={faCircleXmark} color='red' />&nbsp;
            Delete
          </button>
        </div>
      )}
      {isModalOpen && modalContent && (
        <div className='fixed inset-x-0 right-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border'>
          <div className='p-4 bg-white shadow-lg rounded-lg w-1/3'>
            <h2 className='text-lg font-bold'>Edit Task</h2>
            <div className='mt-4'>
              <label className='block'>Task Name</label>
              <input
                type='text'
                value={modalContent.id}
                onChange={(e) =>
                  setModalContent((prev) =>
                    prev ? { ...prev, name: e.target.value } : null
                  )
                }
                className='border p-2 rounded w-full'
              />
            </div>
            <div className='mt-4'>
              <button
                onClick={() =>
                  modalContent && editTask({ ...modalContent })
                }
                className='bg-blue-500 text-white py-2 px-4 rounded'
              >
                Save
              </button>
              <button
                onClick={() => deleteTask(modalContent.id)}
                className='bg-red-500 text-white py-2 px-4 rounded ml-4'
              >
                Delete
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className='absolute top-2 right-2 text-black hover:text-gray-700'
            >
              <Icon iconName={faXmark} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
