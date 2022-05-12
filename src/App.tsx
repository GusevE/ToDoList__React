
import React from 'react';
import { Provider } from 'react-redux';

import styles from '../src/App.module.css'
import { ListAdd } from './components/ListAdd/ListAdd';
import ListToDo from './components/ListToDo/ListToDo';

import store from "./store/store";


export function App() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.block}>
      <ListAdd />
      <ListToDo />  
        </div> 
      </div>
    </Provider>
  );
}