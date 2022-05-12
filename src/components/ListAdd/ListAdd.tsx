import { Button, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, setNewTodo } from "../../store/actions"
import { Store } from "../../store/types"

export const ListAdd: React.FC = () =>{
    const newTodo = useSelector((state: Store)=> state.newTodo)
    const dispatch = useDispatch()
  return(
    <div>
      <h1>ToDoList</h1>
      <TextField
        value={newTodo}
        id="outlined-basic" 
        label="Введите задачу"
        variant="outlined"
        onChange={(e) => dispatch(setNewTodo(e.target.value))}  />
      <Button
        style= {{marginLeft: '10px'}}
        variant="contained" onClick={()=> dispatch(addTodo()) }
        size="large">
        Создать задачу
      </Button>
  </div>
  )
  }
  