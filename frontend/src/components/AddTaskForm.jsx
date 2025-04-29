import React, {useState} from 'react'

function AddTaskForm({onAddTask}) {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !dueDate){
            alert("Please Fill in all the Fields");
            return;
        }

        const newTask = {
            title,
            dueDate,
            priority
        };
        onAddTask(newTask);
        setDueDate("");
        setTitle("");
        setPriority("Medium");
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4 border rounded-l-xl shadow-md'>
            <input 
                type="text"
                placeholder='Task Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='border p-2 rounded'
            />
            
            <input 
                type="date" 
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className='border p-2 rounded'
            />

            <select 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className='border p-2 rounded'
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <button type="submit" className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700 ' >
                Add Task
            </button>
        </form>
    );
}

export default AddTaskForm
