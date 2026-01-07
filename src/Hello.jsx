import { useState } from "react";

function Hello() {
  let [formData, setFormData] = useState({
    gender: "male",
    agree: true,
    country: "pakistan",
  });
  let changeValue = (e) => {
    let { type, value, name, checked } = e.target;
    let prevData = formData;
    setFormData({ ...prevData, [name]: type == "checkbox" ? checked : value });
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
            onChange={changeValue}
          />
          Male
        </label>
        <label>
          <input
            checked={formData.gender == "female"}
            type="radio"
            name="gender"
            value="female"
            onChange={changeValue}
          />
          Female
        </label>
        <label>
          <input
            checked={formData.agree}
            type="checkbox"
            name="agree"
            onChange={changeValue}
          />
          I agree
        </label>
        <label>
          <select name="country" onChange={changeValue}>
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
