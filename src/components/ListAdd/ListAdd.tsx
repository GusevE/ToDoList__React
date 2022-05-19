import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setNewTodo } from "../../store/actions";
import { Store } from "../../store/types";
import styles from "../ListAdd/ListAdd.module.css";

export const ListAdd: React.FC = () => {
  const newTodo = useSelector((state: Store) => state.newTodo);
  const task = useSelector((state: Store) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className={styles.linearWipe}>ToDoList!</h1>
      <div className={styles.block}>
        <TextField
          value={newTodo}
          id="outlined-basic"
          label="Введите задачу"
          variant="outlined"
          onChange={(e) => dispatch(setNewTodo(e.target.value))}
        />
        <Button
          style={{ marginLeft: "20px" }}
          variant="contained"
          onClick={() =>
            newTodo ? dispatch(addTodo()) : alert("введите значени")
          }
        >
          Создать задачу
        </Button>
      </div>
      {task.length ?
      (
      <h4>Колличество: {task.length}</h4>
      )
        :
        <>
        
        </>
      }
      
    </div>
  );
};
