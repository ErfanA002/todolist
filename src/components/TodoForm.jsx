/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const TodoForm = ({ addTodoHandler }) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("meghdari vared nashode");
    }
    addTodoHandler(input);
    console.log(input);
  };
  return (
    <div className="bg-black text-white w-full h-10 flex justify-center">
      <form className="p-2 flex items-center" onSubmit={submitHandler}>
        <input
          className="mx-2 rounded text-black"
          type="text"
          value={input}
          onChange={changeHandler}
        />
        <button className="rounded-full border-2 p-1" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
