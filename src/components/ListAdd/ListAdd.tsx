import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, allTodo, setNewTodo } from "../../store/actions";
import { Store } from "../../store/types";
import styles from "../ListAdd/ListAdd.module.css";

export const ListAdd: React.FC = () => {
  const newTodo = useSelector((state: Store) => state.newTodo);
  let task = useSelector((state: Store) => state.todos);

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      task = task.map((elem) => {
        return { ...elem, done: true };
      });
    } else {
      task = task.map((elem) => {
        return { ...elem, done: false };
      });
    }
    console.log(task);
  };

  return (
    <div>
      <h1 className={styles.linearWipe}>ToDoList!</h1>
      <div className={styles.block}>
        <TextField
          InputProps={{
            startAdornment: (
              <>
                <IconButton>
                  <Checkbox onChange={handleChange} disabled={!task.length} />
                </IconButton>
              </>
            ),
          }}
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
      {task.length ? <h4>Колличество: {task.length}</h4> : <></>}
    </div>
  );
};
