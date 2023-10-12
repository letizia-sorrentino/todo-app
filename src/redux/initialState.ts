export interface StateType {
  todos: { name: string; done: boolean };
  isDarkTheme: boolean;
}

export const initialState: StateType = {
  todos: { name: "", done: false },
  isDarkTheme: false,
};
