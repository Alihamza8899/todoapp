import { useState } from "react";

function Hello() {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let changeValue = (e) => {
    let { type, value } = e.target;
    let prevData = formData;
    setFormData({ ...prevData, [type]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full"
      >
        <label>
          <input
            checked={formData.gender == "male"}
            type="radio"
            name="gender"
            value="male"
          />
          Male
        </label>
        <label>
          <input
            checked={formData.gender == "male"}
            type="radio"
            name="gender"
            value="female"
          />
          Female
        </label>
        <label>
          <input checked={formData.agree} type="checkbox" name="agree" />I agree
        </label>
        <label>
          <select name="country">
            <option value="pakistan">pakistan</option>
            <option value="usa">usa</option>
            <option value="india">india</option>
            <option value="germany">germany</option>
          </select>
        </label>
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
