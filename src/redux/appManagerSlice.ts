import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { RootState } from "./store";

export const appManagerSlice = createSlice({
  name: "appManager",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.todos = action.payload;
    },

    // onDoneToggle: (state, action) => {
    //   if (state.todos.includes(action.payload)) {
    //     //remove item
    //     const indexOf = state.todos.indexOf(action.payload);
    //     state.todos.splice(indexOf, 1);
    //   } else {
    //     state.todos.push(action.payload);
    //   }
    // },

    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

//export actions
export const { addTodo, toggleTheme } = appManagerSlice.actions;

//export data
export const selectTodos = (state: RootState) => state.appManager.todos;
export const selectIsDarkTheme = (state: RootState) =>
  state.appManager.isDarkTheme;

export default appManagerSlice.reducer;
