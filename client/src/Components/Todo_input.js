import React from "react";
import { useRef } from "react";

const Todo_input = ({ createTodo }) => {
  const todoinputref = useRef("");
  const handlesubmit = (e) => {
    e.preventDefault();

    const todoValue = todoinputref.current.value;
    createTodo(todoValue);
    console.log(todoValue);
    todoinputref.current.value = "";
  };
  return (
    <div className="heading">
      <form onSubmit={handlesubmit}>
        <input type="text" ref={todoinputref} required />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Todo_input;
