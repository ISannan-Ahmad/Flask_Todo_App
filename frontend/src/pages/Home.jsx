// src/pages/Home.jsx
import { useState } from "react";
import TaskItem from "../components/TaskItem";
import AddTaskForm from "../components/AddTaskForm";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Buy groceries",
      dueDate: "2025-04-30",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Finish React homework",
      dueDate: "2025-05-01",
      priority: "Medium",
      completed: false,
    },
  ]);

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <div className="p-10 w-[70%] mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
      <div className="space-y-4">
        <AddTaskForm onAddTask={handleAddTask} />
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Home;