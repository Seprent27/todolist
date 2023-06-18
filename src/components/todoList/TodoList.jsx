import React, { useState } from 'react'
import AddTodo from '../addTodo/AddTodo'
import TaskList from '../taskList/TaskList'

export default function TodoList() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true
    },
    {
      id: 2,
      title: 'second todo',
      status: true
    },
    {
      id: 3,
      title: 'third todo',
      status: true
    }
  ])
  
  return (
    <div>
      <AddTodo todo={todo} setTodo={setTodo}/>
      <TaskList todo={todo} setTodo={setTodo}/>
    </div>
  )
}
