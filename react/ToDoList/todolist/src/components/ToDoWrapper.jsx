import React, { useState, useCallback } from "react";
import { v4 as uuidV4 } from "uuid";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

import styles from "../styles.css";

const ToDoWrapper = () => {
  uuidV4();
  const [toDoList, setToDoList] = useState([]);

  const setToDos = useCallback((todo) => {
    setToDoList([
      ...toDoList,
      { id: uuidV4(), task: todo, completed: false, isEditing: false },
    ]);
  },[]);

  return (
    <div className={styles.todoWrapper}>
      <ToDoForm setToDos={setToDos} />
      <ToDoList list={toDoList} />
    </div>
  );
};

export default ToDoWrapper;
