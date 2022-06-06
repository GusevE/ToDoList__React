export interface Todo {
  done: boolean;
  id: number;
  text: string;
  disabled: boolean;
  color: string;
}
export interface Store {
  todos: Todo[];
  newTodo: string;
  status: string | boolean;
}
