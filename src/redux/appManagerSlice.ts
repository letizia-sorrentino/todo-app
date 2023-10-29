import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { RootState } from "./store";

export const appManagerSlice = createSlice({
  name: "appManager",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        name: action.payload,
        id: Math.random() * 100,
        isDone: false,
      };
      state.todos.push(newTodo);
      state.count += 1;
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },

    checkTodo: (state, action) => {
      const checkedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (checkedTodo) {
        checkedTodo.isDone = !checkedTodo.isDone;
      }
    },

    completeTodos: (state, action) => {
      const clearAllCompleted =
        action.payload === null || action.payload === undefined;

      if (clearAllCompleted) {
        state.todos = state.todos.filter((todo) => !todo.isDone);
      } else {
        state.todos.map((todo) => todo.id === action.payload);
      }
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

//export actions
export const {
  addTodo,
  removeTodo,
  checkTodo,
  completeTodos,
  setFilter,
  toggleTheme,
} = appManagerSlice.actions;

//export data
export const selectTodos = (state: RootState) => state.appManager.todos;
export const selectCount = (state: RootState) => state.appManager.count;
export const selectFilter = (state: RootState) => state.appManager.filter;
export const selectIsDarkTheme = (state: RootState) =>
  state.appManager.isDarkTheme;

export default appManagerSlice.reducer;
