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
    setTaskList([...taskList, task]);
    setTask("");
  };
  let deleteTask = (index) => {
    console.log(taskList[index])
    // taskList[index].pop()
     //console.log(taskList);
  }
  return (
    <div className="min-w-[40%] border border-[black] m-16 p-8 rounded-lg bg-white ">
      <div className="pb-4">
        <input
          type="text"
          value={task}
          onChange={handleSubmit}
          className="w-[75%] p-2  border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none transition-all duration-3000"
        />
        <button
          onClick={addTask}
          className="text-white bg-yellow-500 px-2 py-[9px] ml-2 rounded-md hover:bg-white border-2 border-yellow-500 hover:text-black"
        >
          Enter
        </button>
      </div>
      <hr />
      <div className="p-2 mt-2">
        <h1 className="font-[4px] p-2 ">Tasks:-</h1>
        {taskList.map((val, i) => {
          return <Task task={val} key={i} index={i} deleteTask={deleteTask}/>;
        })}
      </div>
    </div>
  );
};
export default TodoApp;
