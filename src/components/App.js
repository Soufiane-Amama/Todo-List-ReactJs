import React from "react";
import Header from "./Header/Header";
import TodoForm from "./TodoForm/TodoForm";

import "../styles.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <TodoForm />
    </div>
  );
};

export default App;
