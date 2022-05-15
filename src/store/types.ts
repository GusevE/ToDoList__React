export interface Todo {
    done: boolean;
    id: number,
    text: string,
    disabled: boolean
}
export interface Store{
    todos: Todo[],
    newTodo: string,
}


