import React, { useState ,useEffect, useRef} from 'react'
import Card from './Card'
import plusIcon from '/src/assets/plus.png'
import TodoForm from './TodoForm';


export default function TodoList() {
  const [showComponent ,  setShowComponent] = useState(false);
  const [title , setTitle]  = useState("");
  const [description , setDescription]  = useState("");
  const [formData , setFormData]  = useState(() => {
    if(!localStorage.getItem("formData")){
      return [];
    }
    return JSON.parse(localStorage.getItem("formData"));
  });

  const nextId = useRef(0);

  useEffect(() => {
    const maxId = formData.reduce((max, todo) => Math.max(max, todo.id), -1);
    nextId.current = maxId + 1;
  }, []);

  useEffect(() => {
    localStorage.setItem("formData" , JSON.stringify(formData));
  }, [formData]);

  const createTodo = (e) => {
    e.preventDefault();
    setFormData([
      ...formData,
      {id : nextId.current , title, description}
    ]);
    setShowComponent(!showComponent);
    nextId.current++;
  }

  const deleteTodo = (id) =>{
    setFormData(
      formData.filter(data => data.id !== id)
    )
  }

  const handleOnClose = ()=>{
    setShowComponent(!showComponent);
  }

  return (
    <div className='todo-list'>
        <div className="todo-card">
          <img onClick={()=> {setShowComponent(!showComponent)} } className='plus-icon' src={plusIcon} alt="" /> 
        </div>

        {showComponent && <TodoForm
        titleChange = {(e) => setTitle(e.target.value)} 
        descriptionChange = {(e) => setDescription(e.target.value) } onClose = {handleOnClose}
        createTodo = {createTodo}/>}

        {formData.map((formData) =>(
          <Card key={formData.id} title={formData.title} description={formData.description} deleteTodo = {() => deleteTodo(formData.id)}/>
        ))}
    </div>
  )
}
