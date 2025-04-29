import React from 'react'

function TaskItem({task, onDelete, onEdit}) {

    const {id, title, dueDate, priority} = task;


    return (
        <div className='flex flex-col border p-4 rounded-xl shadow-sm hover:shadow-md transition'>
            
            <h3 className='text-lg font-semibold'>{title}</h3>
            <p className='text-sm text-gray-600'>Due : {dueDate}</p>
            <p className='text-sm'>
            <span
                className={
                    priority === "High"
                    ? "text-red-500 font-bold"
                    : priority === "Medium"
                    ? "text-yellow-500 font-bold"
                    : "text-green-500 font-bold"
                }
            >
                {priority}
                </span>
            </p>

            <div className='flex gap-2 mt-4'>
                <button
                    onClick={onEdit(task)}
                    className='flex-1 bg-green-500 text-white rounded p-2 hover:bg-green-600'
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(id)}
                    className="flex-1 bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                    Delete
                </button>
                
            </div>
        </div>
    )
}

export default TaskItem
