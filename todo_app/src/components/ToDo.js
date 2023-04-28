import React from 'react'
import './ToDo.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


const ToDo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="todo">
      <p 
      onClick={() => toggleComplete(task.id)}
      className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>

      </div>

    </div>
  )
}

export default ToDo
