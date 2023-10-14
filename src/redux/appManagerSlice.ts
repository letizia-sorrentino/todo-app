import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { RootState } from "./store";

export const appManagerSlice = createSlice({
  name: "appManager",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = { name: action.payload, id: Math.random() * 100 };
      state.todos.push(newTodo);
      state.count += 1;
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },

    onDoneToggle: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (todoIndex !== -1) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      } else {
        state.todos.push(action.payload);
      }
    },

    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

//export actions
export const { addTodo, removeTodo, onDoneToggle, toggleTheme } =
  appManagerSlice.actions;

//export data
export const selectTodos = (state: RootState) => state.appManager.todos;
export const selectCount = (state: RootState) => state.appManager.count;
export const selectIsDarkTheme = (state: RootState) =>
  state.appManager.isDarkTheme;

export default appManagerSlice.reducer;
