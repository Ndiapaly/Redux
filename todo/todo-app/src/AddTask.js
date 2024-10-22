import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store";

function AddTask() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const newTodo = {
      id: Date.now(),
      description,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={handleAddTask}>Ajouter</button>
    </div>
  );
}

export default AddTask;
