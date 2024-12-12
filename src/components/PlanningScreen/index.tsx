'use client';
import React, { useState } from 'react';

import { Icon, DayColumn } from '@/components';
import { FaBars, FaCircleXmark, FaXmark } from 'react-icons/fa6';

import { Shift } from '@/@types';

const FAKE_DATA: Shift[] = [
  { id: '1', assignee: 'Alexandre Timmermans', type: 'caisse', duration: '7h30', pauseDuration: '30m', day: 'Monday', wage: '99', startTime: '7:00', endTime: '15:00' },
  { id: '2', assignee: 'Alexandre Timmermans', type: 'caisse', duration: '7h30', pauseDuration: '30m', day: 'Thursday', wage: '99', startTime: '7:00', endTime: '15:00' },
  { id: '3', assignee: 'Alexandre Timmermans', type: 'caisse', duration: '7h30', pauseDuration: '30m', day: 'Wednesday', wage: '99', startTime: '7:00', endTime: '15:00' },
  { id: '4', assignee: 'Alexandre Timmermans', type: 'caisse', duration: '7h30', pauseDuration: '30m', day: 'Sunday', wage: '99', startTime: '7:00', endTime: '15:00' },
  { id: '5', assignee: 'Alexandre Timmermans', type: 'fermeture', duration: '6h30', pauseDuration: '30m', day: 'Monday', wage: '85', startTime: '18:00', endTime: '1:00' },
  { id: '6', assignee: 'Alexandre Timmermans', type: 'fermeture', duration: '6h30', pauseDuration: '30m', day: 'Friday', wage: '85', startTime: '18:00', endTime: '1:00' },
  { id: '7', assignee: 'Alexandre Timmermans', type: 'fermeture', duration: '6h30', pauseDuration: '30m', day: 'Saturday', wage: '85', startTime: '18:00', endTime: '1:00' },
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
  const [tasks, setTasks] = useState<Shift[]>(FAKE_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Shift | null>(null);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; task: Shift | null }>({ x: 0, y: 0, task: null });

  const moveShift = (id: string, newDay: string) => {
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
    setIsModalOpen(false);
    setContextMenu({ x: 0, y: 0, task: null });
  };

  return (
    <div className='p-8' onClick={closeContextMenu}>
      <div className='flex'>
        {DAYS.map((day) => (
          <DayColumn
            key={day}
            day={day}
            shifts={tasks.filter((task) => task.day === day)}
            moveShift={moveShift}
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
            onClick={() => {
              setModalContent(contextMenu.task);
              setIsModalOpen(true);
              closeContextMenu();
            }}
            className='flex gap-2 w-full text-left py-2 px-4 hover:bg-gray-100 items-center'
          >
            <Icon Component={FaBars} size='md' />
            <span>
              Edit
            </span>
          </button>
          <button
            onClick={() => contextMenu.task && deleteTask(contextMenu.task?.id)}
            className='flex gap-2 w-full text-left py-2 px-4 hover:bg-gray-100 items-center'
          >
            <Icon Component={FaCircleXmark} size='md' color='red' />
            <span className='text-red'>
              Delete
            </span>
          </button>
        </div>
      )}
      {isModalOpen && modalContent && (
        <>
          <div className='fixed inset-y-0 right-0 z-50 ml-24 flex h-full w-1/3 min-w-[360px] flex-col rounded-t-[10px] border'>
            <div className='bg-white shadow-lg h-full'>
              <div className='p-4 pt-[18px] flex border-b-2'>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className='mr-2 text-gray-300'
                >
                  <Icon Component={FaXmark} size='md' />
                </button>
                <h2 className='text-xl'>Edit Shift</h2>
              </div>
              <div className='mt-4 py-2 px-6'>
                <label className='block mb-2 font-bold'>Day</label>
                <select
                  className='rounded border p-2 w-full'
                  defaultValue={modalContent.day}
                  name=''
                  id=''
                  onChange={(e) =>
                    setModalContent((prev) =>
                      prev ? { ...prev, day: e.target.value } : null
                    )
                  }
                >
                  {
                    DAYS.map((day, index) => <option key={index} value={day}>{day}</option>)
                  }
                </select>
              </div>
              <div className='mt-4 py-2 px-6'>
                <label className='block mb-2 font-bold'>Utilizateur</label>
                <input
                  type='text'
                  value={modalContent.assignee}
                  disabled
                  onChange={(e) =>
                    setModalContent((prev) =>
                      prev ? { ...prev, asignee: e.target.value } : null
                    )
                  }
                  className='border p-2 rounded w-full'
                />
              </div>
              <div className='mt-4 py-2 px-6'>
                <div className='flex gap-2'>
                  <div className='flex flex-col'>
                    <label className='block mb-2 font-bold'>Debut</label>
                    <input
                      disabled
                      type='text'
                      value={modalContent.startTime}
                      className='border p-2 rounded'
                      onChange={(e) =>
                        setModalContent((prev) =>
                          prev ? { ...prev, startTime: e.target.value } : null
                        )
                      }
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='block mb-2 font-bold'>Fin</label>
                    <input
                      disabled
                      type='text'
                      value={modalContent.endTime}
                      className='border p-2 rounded'
                      onChange={(e) =>
                        setModalContent((prev) =>
                          prev ? { ...prev, endTime: e.target.value } : null
                        )
                      }
                    />
                  </div>
                </div>
                <div className='flex py-2'>
                  <div>
                    <label className='block mb-2 font-bold'>Pause non payée</label>
                    <input
                      type='text'
                      disabled
                      value={modalContent.pauseDuration}
                      className='border p-2 rounded'
                      onChange={(e) =>
                        setModalContent((prev) =>
                          prev ? { ...prev, name: e.target.value } : null
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              <div className='mt-4 p-6 flex gap-2'>
                <button
                  onClick={() => deleteTask(modalContent.id)}
                  className='bg-red text-white py-2 px-4 rounded flex flex-grow font-semibold text-center'
                >
                  Delete
                </button>
                <button
                  onClick={() => modalContent && editTask({ ...modalContent })}
                  className='bg-green text-white py-2 px-4 rounded flex flex-grow font-semibold text-center'
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div
            className='absolute h-full v-hull bg-black z-40 min-w-full min-h-hull top-0 right-0 opacity-10'
            onClick={() => setIsModalOpen(false)}
          >
          </div>
        </>
      )}
    </div>
  );
};
