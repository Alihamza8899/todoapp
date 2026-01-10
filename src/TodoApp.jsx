import { useState } from "react";
import Task from "./Task.jsx";

let TodoApp = () => {
  let [task, setTask] = useState("");
  let [taskList, setTaskList] = useState([]);

  let handleSubmit = (e) => {
    setTask(e.target.value);
  };
  let addTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { Task: task, completed: false }]);
    setTask("");
    console.log(taskList);
  };
  let deleteTask = (index) => {
    let remainingTask = taskList.filter((val, i) => i != index);
    setTaskList(remainingTask);
    // taskList[index].pop()
  };
  let completeTask = (index) => {
    let comTask = taskList.splice(index, 1);
    let updateTask = {
      Task: comTask[0].Task,
      completed: true,
    };
    setTaskList([updateTask, ...taskList]);

    console.log(taskList);
  };
  return (
    <div
      className={` min-w-[40%] m-8 p-8 rounded-lg bg-white/90`}
      style={{ boxShadow: "0px 10px 10px rgba(0,0,0,0.15)" }}
    >
      <div className="pb-4">
        <input
          type="text"
          value={task}
          onChange={handleSubmit}
          className="w-[75%] p-2  border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none transition-all duration-3000"
        />
        <button
          onClick={addTask}
          className="text-white bg-orange-500 px-2 py-[9px] ml-2 rounded-md hover:bg-orange-600 shadow-md active:scale-95 transition"
        >
          Enter
        </button>
      </div>
      <hr />
      <div className="p-2 mt-2">
        <h1 className="text-2xl p-2 font-bold ">Tasks:-</h1>
        {taskList.map((val, i) => {
          return (
            <Task
              task={val}
              key={i}
              index={i}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TodoApp;
