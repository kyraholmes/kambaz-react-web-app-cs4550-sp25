import { FormControl, ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <FormControl value={todo.title}
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
      <Button onClick={() => dispatch(addTodo(todo)) }
            id="wd-add-todo-click" className="ms-2 btn btn-warning"> Add </Button>
      <Button onClick={() => dispatch(updateTodo(todo)) }
              id="wd-update-todo-click" className="ms-2 btn btn-success"> Update </Button>
    </ListGroup.Item>
);}
