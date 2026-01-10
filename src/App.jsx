import TodoApp from "./TodoApp.jsx";

function App() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 max-w-full p-8 min-h-screen backdrop-blur-md">
      <h1 className="text-4xl font-semibold tracking-wide text-white">
        Task List App
      </h1>
      <TodoApp />
    </main>
  );
}

export default App;
