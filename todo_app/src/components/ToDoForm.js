import React, {useState} from 'react'

const ToDoForm = ({addToDo}) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(value)
        setValue('');
    }

  return (
    <form className="todo-form"
    onSubmit={handleSubmit}
   >
        <input 
        className='todo-input'
        type="text" 
        placeholder="Add a todo" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button 
        className="todo-button" 
        type="submit">Add a To Do</button>

    </form>
  )
}

export default ToDoForm
