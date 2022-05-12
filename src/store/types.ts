export interface Todo {
    done: boolean;
    id: number,
    text: string,
}
export interface Store{
    todos: Todo[],
    newTodo: string,
}


