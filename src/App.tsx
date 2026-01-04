import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  let headingStyle = {
    color: "yellow",
    backgroundColor: "blue",
    fontSize: 30,
  };
  return (
    <main className="flex flex-col items-center gap-6 py-16 max-w-[1280px] mx-auto">
      <h1 style={headingStyle}>Hello React & Tailwind!</h1>
      <div className="flex flex-row items-center gap-6">
        <button
          className="bg-sky-300 px-3 py-2 text-blue-600 bg-red-600 rounded hover:bg-sky-400"
          onClick={() => setCount(count + 2)}
        >
          Count: {count}
        </button>
      </div>
    </main>
  );
}

export default App;
