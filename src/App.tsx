import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import styles from "../src/App.module.css";
import { ListAdd } from "./components/ListAdd/ListAdd";
import ListToDo from "./components/ListToDo/ListToDo";
import Toggler from "./components/Toggler/Toggler";
import store from "./store/store";



export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Toggler />
        </div>
        <div className={styles.block}>
          <ListAdd />
        </div>
        <ListToDo />
      </div>
    </Provider>
  );
};
