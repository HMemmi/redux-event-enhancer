import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodos: (todos, action) => {
      todos.push(action.payload);
    }
  }
});

export const { addTodos } = todoSlice.actions;
export default todoSlice.reducer;
