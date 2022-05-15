import { Checkbox, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteTodo,
  editDisabled,
  editTodo,
  toggleTodo,
} from "../../store/actions";
import { Store } from "../../store/types";
import styles from "../ListToDo/ListToDo.module.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

function ListToDo() {
  const todos = useSelector((state: Store) => state.todos);

  const dispatch = useDispatch();
  console.log(todos);
  return (
    <>
      {todos.map((todo: { id: number; text: string; disabled: boolean }) => (
        <div key={todo.id} className={styles.block}>
          <IconButton>
            <Checkbox onClick={() => dispatch(toggleTodo(todo.id))} />
          </IconButton>
          <TextField
            disabled={todo.disabled}
            value={todo.text}
            onChange={(evt) => dispatch(editTodo(todo.id, evt.target.value))}
            id="outlined-basic"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <>
                  <IconButton>
                    <ModeEditIcon
                      onClick={() =>
                        dispatch(editDisabled(todo.id, todo.disabled))
                      }
                    />
                  </IconButton>
                  <>
                    <IconButton
                      aria-label="delete"
                      onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                </>
              ),
            }}
          />
        </div>
      ))}
    </>
  );
}
export default ListToDo;
