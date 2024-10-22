import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    updateTodo: (state, action) => {
      const { id, description } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.description = description;
      }
    },
  },
});

export const { addTodo, toggleTodo, updateTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
