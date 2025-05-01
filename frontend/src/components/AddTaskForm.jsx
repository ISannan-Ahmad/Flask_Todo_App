// import { useState } from "react";

// const AddTaskForm = ({ onAddTask }) => {
//   const [title, setTitle] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [priority, setPriority] = useState("Medium");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title || !dueDate) return;

//     const newTask = { title, dueDate, priority };
//     onAddTask(newTask);

//     setTitle("");
//     setDueDate("");
//     setPriority("Medium");
//   };

//   return (

//     <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-4 flex flex-wrap gap-2 items-center border">
//       <input
//         type="text"
//         placeholder="Task title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="flex-1 min-w-[120px] rounded px-3 py-2 outline-0 "
        
//         required
//       />

//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         className="border-0 rounded px-3 py-2"
//         required
//       />

//       <select
//         value={priority}
//         onChange={(e) => setPriority(e.target.value)}
//         className="border-0 rounded px-3 py-2"
//       >
//         <option>High</option>
//         <option>Medium</option>
//         <option>Low</option>
//       </select>

//       <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//         Add
//       </button>
//     </form>
//   );
// };

// export default AddTaskForm;


// src/components/AddTaskForm.jsx
import { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !dueDate) return;

    const newTask = {
      id: Date.now(),
      title,
      dueDate,
      priority,
      completed: false,
    };

    onAddTask(newTask);
    setTitle("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white shadow-xl rounded-xl overflow-hidden p-4 border-gray-800 mb-5">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="px-4 py-2 w-full outline-none border-none"
        required
      />

      <div className="h-6 w-px bg-gray-300 mx-2" />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="px-4 py-2 outline-none border-none text-sm text-gray-600"
        required
      />

      <div className="h-6 w-px bg-gray-300 mx-2" />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-4 py-2 outline-none border-none bg-white text-sm text-gray-700"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md ml-4 hover:bg-blue-600 transition">
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
