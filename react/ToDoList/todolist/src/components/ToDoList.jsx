import React from "react";

import styles from "../styles.css";

const ToDoList = ({ list }) => {
  return (
    <div className={styles.listWrapper}>
      {list &&
        list.map((item) => {
          <div className={styles.listItem}>{item.task}</div>;
        })}
    </div>
  );
};

export default ToDoList;
