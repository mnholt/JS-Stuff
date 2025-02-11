import React, { useState } from "react";

import styles from "../styles.css";

const ToDoForm = ({ setToDos }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setToDos(value);
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.todoInput}
        placeholder="Add To Do"
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">{"ADD"}</button>
    </form>
  );
};

export default ToDoForm;
