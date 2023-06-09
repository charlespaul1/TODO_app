import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import {v4 as uuidv4} from 'uuid'
import ToDo from './ToDo'
import './ToDoWrapper.css'
import EditToDoForm from './EditToDoform'
uuidv4();

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])
  const addToDo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos);
  }
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id ===id ? {...todo, completed: !todo.completed} : todo
    ))
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
    ))
  }
  const editTask = (task, id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, task: task, isEditing: !todo.isEditing} : todo
    ))
  }

    

  return (
    <div className='to-do-wrapper'>
      <h1>Things to be Done!!</h1>
      <ToDoForm addToDo={addToDo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? (<EditToDoForm editToDo={editTask} task={todo} />)
       : (<ToDo key={index} task={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        />)
      ))}
    </div>
  )
}

export default ToDoWrapper
