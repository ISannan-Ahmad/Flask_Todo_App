import { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !dueDate) return;

    const newTask = { title, dueDate, priority };
    onAddTask(newTask);

    setTitle("");
    setDueDate("");
    setPriority("Medium");
  };

  return (

    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-4 flex flex-wrap gap-2 items-center">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 min-w-[120px] border rounded px-3 py-2"
        required
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border rounded px-3 py-2"
        required
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
