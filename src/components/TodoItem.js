import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import './todoitem.css'
import { useDispatch } from "react-redux";
import { setChecked  } from "../features/todoSlice";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const TodoItem = ({ id, item, done }) => {
  const dispatch = useDispatch()

    const handleCheck = () => {
      dispatch(setChecked(id))

    }
  return (
    <div className="todoItem">
      {/* checkbox */}
      <Checkbox checked={done} color="primary" onChange={handleCheck} {...label} />
      {/* name */}
      <p id={id} className={done && "todoItem--done"}>
        {item}
      </p>
    </div>
  );
};

export default TodoItem;
