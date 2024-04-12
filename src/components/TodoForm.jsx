import React, { useState } from 'react'
import crossIcon from '/src/assets/cross.png'

export default function TodoForm({titleChange,descriptionChange,createTodo, onClose}) {

  const [close, SetClose] = useState(false);



  return (
   <>
    <div className='modal-backdrop'>
    <form className='todo-form'>
      <img src={crossIcon} onClick={onClose} alt="" />
       <div className="form-title">
        <label>Title</label>
        <input type="text"
          onChange={titleChange}
         placeholder='Enter the title'
         required/>
       </div>
       <div className="form-desc">
        <label>Description</label>
        <input type="text"
          onChange={descriptionChange}
         placeholder='Enter the description'/>
       </div>
       <button className='create-button' onClick={createTodo}>Create</button>
    </form>
    </div>
   </>
  )
}
