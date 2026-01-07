import { useState } from "react";

function Hello() {
  let [email, setEmail] = useState("");
  let [password, setpassword] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + "  " + password);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-500 rounded-sm w-[30%] py-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="border border-gray-500 rounded-sm w-[30%] py-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900 "
        >
          submit
        </button>
      </form>
    </>
  );
}

export default Hello;
