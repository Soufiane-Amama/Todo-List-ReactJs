import React from "react";
import "./TodoItem.css";

const TodoItem = ({ item, clear }) => {
  const list = item.map((liEl, index) => (
    <li key={index}>
      <hr />
      <input type="datetime-local" />
      <p>
        <input type="checkbox" /> {liEl}
      </p>
      <button className="btnDelet" onClick={() => clear(index)}>
        Delete
      </button>
      <hr />
    </li>
  ));

  /* ==================================== */

  return <ul>{list}</ul>;
};

export default TodoItem;
