import { Todo, Store } from './types';
import { createStore } from 'redux';
import { ActionTypes, DELETE_TODO, ADD_TODO, SET_NEWTODO, TOGGLE_TODO, EDIT_TODO, DISABLED_TODO, ALL_TODO, ACTION_TODO, UPDATE_STATUS } from './actions';
import { colorGenerator } from '../components/utils/fun';



let id = 0


const addTodo = (todos: Todo[], text: string): Todo[]=> [...todos, {id: ++id,text, done: false, disabled: true, color: colorGenerator()}];

const removeTodo = (todos: Todo[], id: number): Todo[] => todos.filter((todo) => todo.id !== id);

const toggleTodo = (todos: Todo[], id: number): Todo[] => todos.map((todo) => ({...todo, done: todo.id === id ? !todo.done : todo.done}));

const editTodo = (todo: Todo[], id: number, text: string): Todo[] => todo.map((todo) =>  ({ ...todo, text: todo.id === id  ?  text : todo.text}) )

const editDisabled = (todo: Todo[], id: number): Todo[]=> todo.map((todo)=> ({...todo, disabled: todo.id === id ? !todo.disabled : todo.disabled}))

const allTodo = (todos: Todo[], text: boolean):Todo[]  =>  todos.map(( elem)=>{ return {...elem, done: text}})

const actionTodo = (todos: Todo[]):Todo[] =>  [...todos]

function todoReducer(state: Store = { todos: [], newTodo: "" , status: "all" }, action: ActionTypes)
  {
    switch (action.type){
        case SET_NEWTODO: return {...state,newTodo: action.payload};
        case DELETE_TODO: return {...state,todos: removeTodo(state.todos, action.payload)};
        case ADD_TODO: return { ...state, newTodo: "", todos: addTodo(state.todos, state.newTodo)};
        case TOGGLE_TODO: return { ...state, todos: toggleTodo(state.todos, action.payload)};
        case EDIT_TODO: return { ...state, todos: editTodo(state.todos, action.payload.id, action.payload.text) };
        case DISABLED_TODO: return { ...state, todos: editDisabled(state.todos, action.payload.id) };
        case ALL_TODO: return {...state, todos: allTodo (state.todos, action.payload)};
        case ACTION_TODO: return {...state, todos: actionTodo (action.payload)};
        case UPDATE_STATUS: return {...state, status: action.payload}
        default:
      return state;
    }
  }
  const store = createStore(todoReducer);
  
  export default store;

