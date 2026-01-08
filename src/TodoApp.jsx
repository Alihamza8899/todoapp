let TodoApp = () => {
  return (
    <div className="min-w-[40%] border border-[black] m-16 p-8 rounded-lg bg-white ">
      <div>
        <input
          type="text"
          className="w-[80%] p-2  border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none transition-all duration-3000"
        />
        <button className="text-white bg-yellow-500 px-2 py-[10px] ml-2 ">
          Enter
        </button>
      </div>
      <div>
        <h3>To do list</h3>
      </div>
    </div>
  );
};
export default TodoApp;
