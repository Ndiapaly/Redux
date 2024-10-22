import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo } from "./store";

function Task({ task }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(task.id));
  };

  const handleUpdate = (e) => {
    const newDescription = e.target.value;
    dispatch(
      updateTodo({
        id: task.id,
        description: newDescription,
      })
    );
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <input type="text" value={task.description} onChange={handleUpdate} />
    </div>
  );
}

export default Task;
