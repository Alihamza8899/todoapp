let Task = ({ task }) => {
  return (
    <div className="flex justify-between p-2 my-2 bg-[wheat]">
      <h3>{task}</h3>
      <div>
        <button className="bg-red-600 py-[2px] px-2 text-white ml-2 rounded-md">
          &#x2717;
        </button>
        <button className="bg-green-600 py-[2px] px-2 text-white ml-2 rounded-md">
          &#x2714;
        </button>
      </div>
    </div>
  );
};
export default Task;
