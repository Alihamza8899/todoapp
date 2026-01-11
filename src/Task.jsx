let Task = ({ task, index, deleteTask, completeTask }) => {
  return (
    <div className="flex justify-between p-2 my-2 bg-white border-[2px] border-[#eee] rounded-xl hover:bg-orange-50 transition cursor-pointer shadow-md">
      <h3
        className={`${
          task.completed ? "line-through text-gray-400" : ""
        } max-w-[70%] break-words`}
      >
        {task.Task}
      </h3>
      <div>
        <button
          onClick={() =>
            task.completed
              ? deleteTask(index)
              : alert("Please! complete the task first.")
          }
          className="bg-red-200 hover:bg-red-400 text-red-700 py-[2px] px-2  ml-2 rounded-full"
        >
          &#x2717;
        </button>
        <button
          onClick={() => completeTask(index)}
          className="bg-green-200 hover:bg-green-400 text-green-700 py-[2px] px-2  ml-2 rounded-full"
        >
          &#x2714;
        </button>
      </div>
    </div>
  );
};
export default Task;
