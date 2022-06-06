import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../store/actions";
import { Store, Todo } from "../../store/types";
import styles from "../Button/ButtonComponent.module.css";

export const ButtonComponent: React.FC = () => {
  const dispatch = useDispatch();


  const updateStatus2 = (status: string | boolean) => {
    dispatch(updateStatus(status))
  }

  return (
    <div className={styles.button__container}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => updateStatus2("all")}
      >
        ALL
      </Button>
      <Button
        onClick={() => updateStatus2(false)}
        variant="contained"
        color="success"
        style={{ margin: "0 20px 0 20px" }}
      >
        Active
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => updateStatus2(true)}
      >
        Complete
      </Button>
    </div>
  );
};
