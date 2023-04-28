import React, {useState} from 'react'
import './TodoForm.css'
const EditToDoForm = ({editToDo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = (e) => {
        e.preventDefault();
        editToDo(value, task.id);
        setValue('');
    }

  return (
    <form className="todo-form"
    onSubmit={handleSubmit}
   >
        <input 
        className='todo-input'
        type="text" 
        placeholder="Update task" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button 
        className="todo-button" 
        type="submit">Update Task</button>

    </form>
  )
}

export default EditToDoForm
