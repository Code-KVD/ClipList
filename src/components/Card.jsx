import React, { useState } from 'react'

export default function Card({ title , description , deleteTodo}) {
  const [done, setDone] = useState(false);
  return (
    <>
        <div className="todo-card" style={{backgroundColor : done ? "rgb(220, 247, 229)" : "rgb(231, 237, 244)"}}>
            <h3 className='todo-title'>{title}</h3>
            <p className='todo-description'>{description}</p>
            <div className='card-buttons'>
                <button className='done-button' onClick={()=> setDone(!done)}>Done</button>
                <button className='delete-button' onClick={deleteTodo}>Delete</button>
            </div>
        </div>
    </>
  )
}
