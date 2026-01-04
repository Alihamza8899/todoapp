function App() {
  return (
    <main className="flex flex-col items-center gap-6 py-16 w-[250px] h-[350px] mx-auto border-[2px] border-[wheat]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log();
        }}
      >
        <input
          type="email"
          className=" m-6 border-[1px] rounded-xs border-black"
          placeholder="Email"
          required
          onChange={(e) => console.log(e.target.value)}
        />
        <input
          type="password"
          className="m-6 border-[1px] border-black rounded-xs"
          placeholder="Password"
          required
          name="pws"
          id="pws"
        />
        <button
          type="submit"
          className="rounded-md w-[80%] py-4 mx-8 text-white bg-blue-500"
        >
          submit
        </button>
      </form>
    </main>
  );
}

export default App;
