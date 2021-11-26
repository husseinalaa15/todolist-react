import React from 'react'

const Todo = ({todo,toggleTodo,removeTodo}) => {
    function handleClick(){
        toggleTodo(todo.id)
    }
    function handleRemove(){
        removeTodo(todo.id)
    }
    return (
        
            <li key={todo.id} className="todoli mt-3">   
                <div class="todoname">
                    <h3 > {todo.task}</h3>
                </div>             
                <div className="actions ">
                    <label 
                    for={"done"+todo.id} 
                    className={todo.completed ? "btn btn-success " : "btn btn-warning"}>
                        {todo.completed ? <i class='fas fa-check-circle  mr-1'></i> : <i class="fas fa-clock mr-1"></i> }
                        {todo.completed ?"Completed" : "Pending"} 
                        
                    </label>
                    <input onChange={handleClick} id={"done"+todo.id}  type="checkbox" checked={todo.completed ? "checked" : ""}/>
                    <button className="btn btn-danger" onClick={handleRemove}>X</button>
                </div>
           </li>
    )
}

export default Todo
