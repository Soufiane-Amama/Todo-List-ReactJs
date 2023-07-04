import React, { Fragment, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoForm.css";

const TodoForm = () => {
  const [arr, setArr] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const clickHandler = () => {
    if (inputValue.trim() === "") {
      setInputValue("");
    } else {
      setArr((prevArr) => [...prevArr, inputValue]);
      setInputValue("");
    }
  };

  const clearList = (index) => {
    const newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);
  };

  /* ==================================== */

  return (
    <Fragment>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type your task here.."
      />
      <button className="btn" onClick={clickHandler}>
        Add Item :)
      </button>

      <TodoItem item={arr} clear={clearList} />
    </Fragment>
  );
};

export default React.memo(TodoForm);
