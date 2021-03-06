import { Todo } from './types';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_NEWTODO = 'SET_NEWTODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DISABLED_TODO = 'DISABLED_TODO';
export const ALL_TODO = 'ALL_TODO';
export const ACTION_TODO = 'ACTION_TODO';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export type ActionTypes =
  | { type: typeof ADD_TODO }
  | { type: typeof DELETE_TODO; payload: number }
  | { type: typeof SET_NEWTODO; payload: string }
  | { type: typeof TOGGLE_TODO; payload: number }
  | { type: typeof EDIT_TODO; payload: { id: number; text: string } }
  | { type: typeof DISABLED_TODO; payload: { id: number; disabled: boolean } }
  | { type: typeof ALL_TODO; payload: boolean }
  | { type: typeof ACTION_TODO; payload: Todo[] }
  | { type: typeof UPDATE_STATUS; payload: string | boolean };

export const addTodo = (): ActionTypes => ({ type: ADD_TODO });
export const deleteTodo = (id: number): ActionTypes => ({ type: DELETE_TODO, payload: id });
export const setNewTodo = (text: string): ActionTypes => ({ type: SET_NEWTODO, payload: text });
export const toggleTodo = (id: number): ActionTypes => ({ type: TOGGLE_TODO, payload: id });
export const editTodo = (id: number, text: string): ActionTypes => ({ type: EDIT_TODO, payload: { id, text } });
export const editDisabled = (id: number, disabled: boolean): ActionTypes => ({ type: DISABLED_TODO, payload: { id, disabled } });
export const allTodo = (text: boolean): ActionTypes => ({ type: ALL_TODO, payload: text });
export const actionTodo = (text: Todo[]): ActionTypes => ({ type: ACTION_TODO, payload: text });
export const updateStatus = (status: string | boolean): ActionTypes => ({ type: UPDATE_STATUS, payload: status });
