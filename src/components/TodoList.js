import React from 'react'
import Todo from './Todo';

 function TodoList({todos , toggleTodo , removeTodo}) {
   return (
        <ul className="container mt-3" >
            {todos.map((todo)=>{
                return(
                    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                )
            })}

        </ul>
       
    )
}

export default TodoList
