export interface StateType {
  count: number;
  todos: { name: string; id: number; isDone: boolean }[];
  filter: string;
  isDarkTheme: boolean;
}

export const initialState: StateType = {
  count: 0,
  todos: [],
  filter: "all",
  isDarkTheme: false,
};
