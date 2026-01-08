odoApp = () => {
  return (
    <div className="min-w-[40%] border border-[black] m-16 p-8 rounded-lg bg-white ">
      <div className="pb-4">
        <input
          type="text"
          className="w-[75%] p-2  border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none transition-all duration-3000"
        />
        <button className="text-white bg-yellow-500 px-2 py-[9px] ml-2 rounded-md hover:bg-white border-2 border-yellow-500 hover:text-black">
          Enter
        </button>
      </div>
      <hr />
      <div>
        Task
        <Task />
      </div>
    </div>
  );
};
export default TodoApp;
