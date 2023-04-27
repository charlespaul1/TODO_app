import React from 'react'
import './ToDo.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


const ToDo = ({task}) => {
  return (
    <div className="todo">
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}/>
        <FontAwesomeIcon icon={faTrash}/>

      </div>

    </div>
  )
}

export default ToDo
