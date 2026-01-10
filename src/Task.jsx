let Task = ({ task, index, deleteTask, completeTask }) => {
  return (
    <div className="flex justify-between p-2 my-2 bg-[wheat]">
      <h3 className={task.completed ? "line-through" : ""}>{task.Task}</h3>
      <div>
        <button
          onClick={() =>
            task.completed
              ? deleteTask(index)
              : alert("Please! complete the task first.")
          }
          className="bg-red-600 py-[2px] px-2 text-white ml-2 rounded-md"
        >
          &#x2717;
        </button>
        <button
          onClick={() => completeTask(index)}
          className="bg-green-600 py-[2px] px-2 text-white ml-2 rounded-md"
        >
          &#x2714;
        </button>
      </div>
    </div>
  );
};
export default Task;
