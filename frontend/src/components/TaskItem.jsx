// const TaskItem = ({ task, onDelete, onEdit, onToggleComplete }) => {
//     const getPriorityStyle = (priority) => {
//       switch (priority) {
//         case "High":
//           return "bg-red-100 text-red-700";
//         case "Medium":
//           return "bg-yellow-100 text-yellow-700";
//         case "Low":
//           return "bg-green-100 text-green-700";
//         default:
//           return "bg-gray-100 text-gray-700";
//       }
//     };
  
//     return (
//       <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
//         <div>
//           <h2 className="text-lg font-semibold">{task.title}</h2>
//           <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
//           <span
//             className={`inline-block px-2 py-1 text-xs font-semibold rounded ${getPriorityStyle(task.priority)} mt-1`}
//           >
//             {task.priority}
//           </span>
//         </div>
  
//         <div className="flex gap-2 mt-3 md:mt-0">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//             Edit
//           </button>
//           <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//             Delete
//           </button>
//         </div>
//       </div>
//     );
//   };
  
// export default TaskItem;
