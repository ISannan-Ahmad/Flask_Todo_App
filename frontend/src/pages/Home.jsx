import React, {useState, useEffect} from 'react';
import TaskItem from "../components/TaskItem";

function Home() {
    
    const [tasks, setTasks] = useState([]);

     // TEMP: Sample tasks for now
    useEffect(() => {
    setTasks([
        {
            id: 1,
            title: "Finish project report",
            dueDate: "2025-05-01",
            priority: "High",
        },
        {
            id: 2,
            title: "Buy groceries",
            dueDate: "2025-04-30",
            priority: "Low",
        },
        ]);
    }, []);

    const handleDelete = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      };
    
      const handleEdit = (taskToEdit) => {
        // Later we'll open a form and populate it with this task
        console.log("Editing task:", taskToEdit);
      };

    return (
        <div className="max-w-2xl mx-auto mt-10 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    )
}

export default Home
