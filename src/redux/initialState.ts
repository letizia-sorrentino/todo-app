export interface StateType {
  count: number;
  todos: { name: string; id: number }[];
  isDarkTheme: boolean;
}

export const initialState: StateType = {
  count: 0,
  todos: [],
  isDarkTheme: false,
};
