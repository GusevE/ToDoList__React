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
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { ButtonComponent } from "../Button/ButtonComponent";

function ListToDo() {
  const { todos, status } = useSelector((state: Store) => state);

  console.log(todos)

  const filterStatus = () => {
    if (status === "all") {
      return todos;
    } else {
      return [...todos].filter((elem) => elem.done === status);
    }
  };

  const dispatch = useDispatch();

  return (
    <>
      {filterStatus().map(
        (todo: {
          id: number;
          text: string;
          disabled: boolean;
          color: string;
          done: boolean;
        }) => (
          <div key={todo.id} className={styles.block}>
            <IconButton>
              <Checkbox
                checked={todo.done}
                disabled={!todo.disabled}
                onClick={() => dispatch(toggleTodo(todo.id))}
              />
            </IconButton>
            <TextField
              style={{ backgroundColor: todo.color }}
              disabled={todo.disabled}
              value={todo.text}
              onChange={(evt) => dispatch(editTodo(todo.id, evt.target.value))}
              id="outlined-basic"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <>
                    <IconButton>
                      {todo.disabled ? (
                        <ModeEditIcon
                          onClick={() =>
                            dispatch(editDisabled(todo.id, todo.disabled))
                          }
                        />
                      ) : (
                        <DoneAllIcon
                          onClick={() =>
                            todo.text !== ""
                              ? dispatch(editDisabled(todo.id, todo.disabled))
                              : alert("Поле не должно быть пустым")
                          }
                        />
                      )}
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
        )
      )}
      {todos.length ? <ButtonComponent /> : <></>}
    </>
  );
}
export default ListToDo;
