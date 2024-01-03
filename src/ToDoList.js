import React,{useState} from "react";
import {v4 as uuid} from 'uuid';

import Todo from './Todo';
import NewToDoForm from "./NewToDoForm";

const ToDoList = ()=>{
    let [todos, setTodos] = useState([])

    const addTodo = (text) =>{
        setTodos(todos => [...todos, {key:uuid(), text}])
    }

    const removeTodo = (todoKey) =>{
        setTodos(todos => todos.filter((todo) => todo.key != todoKey))
    }

    return(
        <div>
            <NewToDoForm addTodo={addTodo} />
            <div>
                <ul>
                    {todos.map((todo) => <Todo key={todo.key} id={todo.key} text={todo.text}  removeTodo={removeTodo}/>)}
                </ul>
            </div>
        </div>
    )

}

export default ToDoList