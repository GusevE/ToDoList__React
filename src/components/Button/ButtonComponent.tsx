import { Button } from "@mui/material";
import React from "react";
import styles from "../Button/ButtonComponent.module.css";

export const ButtonComponent: React.FC = () => {
  return (
    <div className={styles.button__container}>
      <Button variant="contained" color="primary">
        ALL
      </Button>
      <Button
        variant="contained"
        color="success"
        style={{ margin: "0 20px 0 20px" }}
      >
        Active
      </Button>
      <Button variant="contained" color="error">
        Complete
      </Button>
    </div>
  );
};
