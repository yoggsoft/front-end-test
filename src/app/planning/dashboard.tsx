
// import React, { useState } from 'react';

// const PlanningScreen = () => {
//   const [tasks, setTasks] = useState<Task[]>(fakeData);
//   const { isModalOpen, openModal, closeModal, modalContent, setModalContent } = useModal<Task | null>(null);

//   const moveTask = (id: string, newDay: string) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id ? { ...task, day: newDay } : task
//       )
//     );
//   };

//   const openContextMenu = (task: Task) => {
//     setModalContent(task);
//     openModal();
//   };

//   const editTask = (updatedTask: Task) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
//     );
//     closeModal();
//   };

//   const deleteTask = (id: string) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//     closeModal();
//   };

//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

//   return (
//     <div className="p-8">
//       <Head>
//         <title>Planning Screen</title>
//       </Head>
//       <DndProvider backend={HTML5Backend}>
//         <div className="flex gap-4">
//           {days.map((day) => (
//             <DayColumn
//               key={day}
//               day={day}
//               tasks={tasks.filter((task) => task.day === day)}
//               moveTask={moveTask}
//               openContextMenu={openContextMenu}
//             />
//           ))}
//         </div>
//       </DndProvider>
//       {isModalOpen && modalContent && (
//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={closeModal}
//           className="p-4 bg-white shadow-lg rounded-lg"
//         >
//           <h2 className="text-lg font-bold">Edit Task</h2>
//           <div className="mt-4">
//             <label className="block">Task Name</label>
//             <input
//               type="text"
//               value={modalContent.name}
//               onChange={(e) =>
//                 setModalContent((prev) =>
//                   prev ? { ...prev, name: e.target.value } : null
//                 )
//               }
//               className="border p-2 rounded w-full"
//             />
//           </div>
//           <div className="mt-4">
//             <button
//               onClick={() =>
//                 modalContent && editTask({ ...modalContent })
//               }
//               className="bg-blue-500 text-white py-2 px-4 rounded"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => deleteTask(modalContent.id)}
//               className="bg-red-500 text-white py-2 px-4 rounded ml-4"
//             >
//               Delete
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default PlanningScreen;
