import { Todo, Store } from './types';
import { createStore } from 'redux';
import { ActionTypes, DELETE_TODO, SET_TODOS, ADD_TODO, SET_NEWTODO, TOGGLE_TODO, EDIT_TODO} from './actions';

let id = 0

const addTodo = (todos: Todo[], text: string): Todo[]=> [...todos, {id: ++id,text, done: false}];

const removeTodo = (todos: Todo[], id: number): Todo[] => todos.filter((todo) => todo.id !== id);

const toggleTodo = (todos: Todo[], id: number): Todo[] => todos.map((todo) => ({...todo,done: todo.id === id ? !todo.done : todo.done}));

const editTodo = (todo: Todo[], id: number, text: string): Todo[] => todo.map((todo) => ({ ...todo, text: todo.id === id ? text : todo.text}) )

function todoReducer(state: Store = { todos: [], newTodo: ""}, action: ActionTypes)
  {
    switch (action.type) {case SET_TODOS: return { ...state,todos: action.payload,};
        case SET_NEWTODO: return {...state,newTodo: action.payload,};
        case DELETE_TODO: return {...state,todos: removeTodo(state.todos, action.payload),};
        case ADD_TODO: return { ...state, newTodo: "", todos: addTodo(state.todos, state.newTodo),};
        case TOGGLE_TODO: return { ...state, todos: toggleTodo(state.todos, action.payload),};
        case EDIT_TODO: return { ...state, todos: editTodo(state.todos, action.payload.id, action.payload.text) }
        default:
      return state;
    }
  }
  const store = createStore(todoReducer);
  
  export default store;

