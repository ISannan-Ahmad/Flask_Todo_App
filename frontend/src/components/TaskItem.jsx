import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";

const TaskItem = ({
  task,
  isEditing,
  onEdit,
  onCancelEdit,
  onSaveEdit,
  onDelete,
  onToggleComplete,
}) => {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  useEffect(() => {
    if (isEditing) {
      setEditedTitle(task.title);
      setEditedDueDate(task.dueDate);
    }
  }, [isEditing, task]);

  const priorityColors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  const handleSave = () => {
    onSaveEdit({ ...task, title: editedTitle, dueDate: editedDueDate });
  };

  return (
    <div
    className={`bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border border-gray-100 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-[1.01] "opacity-100 scale-100"}`}
    >
      {/* Left side: checkbox and task info */}
      <div className="flex items-start gap-3 w-full ">
        

        {/* Task content */}
        {isEditing ? (
          <div className="flex flex-wrap w-full gap-3">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="border px-3 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="date"
              value={editedDueDate}
              onChange={(e) => setEditedDueDate(e.target.value)}
              className="border px-3 py-2 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <select
              value={editedPriority}
              onChange={(e) => setEditedPriority(e.target.value)}
              className="border px-3 py-2 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        ) : (
          <div className="flex gap-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className="mt-6 h-5 w-5 accent-blue-500"
            />

          <div className="">

            <h2
              className={`text-lg font-semibold  ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
              >
              {task.title}
            </h2>
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            <span
              className={`inline-block px-2 py-1 text-xs font-semibold rounded mt-1 ${
                priorityColors[task.priority] || "bg-gray-200 text-gray-800"
              }`}
              >
              {task.priority}
            </span>
          </div>
          
          </div>
        )}
      </div>

{/* Right side: action buttons */}
<div className="flex gap-2">
        {isEditing ? (
           <>
           <button
             onClick={handleSave}
             className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2"
           >
             <FaSave /> Save
           </button>
           <button
             onClick={onCancelEdit}
             className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 flex items-center gap-2"
           >
             <FaTimes /> Cancel
           </button>
         </>
        ) : (
          <>
            

            <button
              onClick={onEdit}
              disabled={task.completed}
              className={`px-4 py-4 rounded-lg transition duration-200 flex gap-2 ${
                task.completed
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              title={task.completed ? "Cannot edit a completed task" : "Edit task"}
            >
               <FaEdit className="m-auto" /> Edit
            </button>

            <button
              onClick={() => onDelete(task.id)}
              className="bg-red-600 text-white px-4 py-4 rounded-lg hover:bg-red-700 transition flex gap-2"
            >
              <FaTrash className="m-auto" /> Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
