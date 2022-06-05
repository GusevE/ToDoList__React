import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTodo } from "../../store/actions";
import { Store, Todo } from "../../store/types";
import styles from "../Button/ButtonComponent.module.css";

export const ButtonComponent: React.FC = () => {
  const dispatch = useDispatch();

  let task = useSelector((state: Store) => state.todos);

  const [status, setStatus] = useState<Todo[]>(task);

  console.log(status);

  const filterStatus = (status: any) => {
    if (status === "all") {
      setStatus(task);
    } else {
      let newData = [...task].filter((elem) => elem.done === status);
      setStatus(newData);
    }
  };


  useEffect(()=>{
    dispatch(actionTodo(status))
  }, [status])

  return (
    <div className={styles.button__container}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => filterStatus("all")}
      >
        ALL
      </Button>
      <Button
        onClick={() => filterStatus(false)}
        variant="contained"
        color="success"
        style={{ margin: "0 20px 0 20px" }}
      >
        Active
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => filterStatus(true)}
      >
        Complete
      </Button>
    </div>
  );
};
