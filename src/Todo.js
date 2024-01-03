import React, {useState} from "react";

const Todo = ({id, text, removeTodo}) =>{

    const handleRemove = (e)=>{
        e.preventDefault();
        removeTodo(id);
    };

    return(
        <li className="todo-item" id={id}>
            {text}
            <button className="todo-remove-button" onClick={handleRemove}>X</button>
        </li>
    )

}

export default Todo