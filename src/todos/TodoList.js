import React from 'react'
import TodoListItem from './ToDoListItem.js'
import NewTodoForm from './NewToDoForm.js'

const TodoList = ({todos=[{text:'Learn-react'}]}) => {
  return (
    <div className='list-wrapper'>
      <NewTodoForm/>
        {todos?.map(todo=> <TodoListItem todo={todo}/>)}
    </div>
  )
}

export default TodoList