import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({todo, setTodo}) {
  
  const [value, setValue] = useState('')
  const { v4: uuidv4 } = require('uuid');
  function saveTodo() {
    setTodo(
      [...todo, {
        id: uuidv4(),
        title: value, 
        status: true
      }]
    )
    setValue('')
  }

  return (
    <div>
      <input placeholder='Напишите задачу' value={value} onChange={ (e) => {
        setValue(e.target.value)
      }}/>
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  )
}
