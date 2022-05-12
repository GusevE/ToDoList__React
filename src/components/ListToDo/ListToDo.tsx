import { Checkbox, IconButton, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { deleteTodo, editTodo, toggleTodo } from "../../store/actions";
import { Store } from "../../store/types";
import styles from '../ListToDo/ListToDo.module.css'
import ModeEditIcon from '@mui/icons-material/ModeEdit';



function ListToDo() {

const todos = useSelector((state: Store ) => state.todos);
const dispatch = useDispatch()
console.log(todos)
    return(
        <>
            {todos.map((todo: {id: number; text: string})=>(
                <div key={todo.id} className={styles.block}>
                        <Checkbox 
                            onClick={() => dispatch(toggleTodo(todo.id))}
                        />
                         <TextField
                            value={todo.text}
                            id="outlined-basic" 
                            variant="outlined" 
                            InputProps={{
                                endAdornment: (
                                  <IconButton>
                                    <ModeEditIcon 
                                        onClick={() => dispatch(editTodo(todo.id, todo.text))}
                                    />
                                  </IconButton>
                                ),
                              }}
                            
                            />
                            <IconButton
                             aria-label="delete"
                             onClick={() => dispatch(deleteTodo(todo.id))}>
                            <DeleteIcon />
                            </IconButton>
                </div>
            ))}
        
        </>
       
    )
}
export default ListToDo;


