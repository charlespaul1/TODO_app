import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import {v4 as uuidv4} from 'uuid'
import ToDo from './ToDo'
import './ToDoWrapper.css'
uuidv4();

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])
  const addToDo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos);
  
  }

  return (
    <div className='to-do-wrapper'>
      <h1>Things to be Done!!</h1>
      <ToDoForm addToDo={addToDo}/>
      {todos.map((todo, index) => (
        <ToDo key={index} task={todo}/>
      ))}
    </div>
  )
}

export default ToDoWrapper
