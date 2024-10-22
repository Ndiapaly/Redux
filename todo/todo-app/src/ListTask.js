import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function ListTask() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <Task key={todo.id} task={todo} />
      ))}
    </div>
  );
}

export default ListTask;
