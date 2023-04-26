import React from 'react'

const CustomForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
  return (
    <form className='todo'
    onSubmit={handleSubmit}
    >
    <div className="wrapper">
        
    </div>

      
    </form>
  )
}

export default CustomForm
