
import React, { useState } from "react";
import TaskItem from "../components/TaskItem";
import AddTaskForm from "../components/AddTaskForm"; // Assuming you have this
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [filter, setFilter] = useState("all"); // all | completed | pending

  // Add task handler
  const handleAddTask = (newTask) => {
    const taskWithId = { ...newTask, id: uuidv4(), completed: false };
    setTasks([...tasks, taskWithId]);
  };

  // Delete handler
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit handler
  const handleEdit = (id) => {
    setEditingTaskId(id);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  const handleSaveEdit = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTaskId(null);
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="max-w-[70%] mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Task Manager</h1>

      <AddTaskForm onAddTask={handleAddTask} />

      {/* Filter Buttons */}
      <div className="flex justify-end gap-4 mt-6 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            filter === "pending" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Pending
        </button>
      </div>

      {/* Task List */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            isEditing={editingTaskId === task.id}
            onEdit={() => handleEdit(task.id)}
            onCancelEdit={handleCancelEdit}
            onSaveEdit={handleSaveEdit}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-6">No tasks to show</p>
      )}
    </div>
  );
};

export default Home;
