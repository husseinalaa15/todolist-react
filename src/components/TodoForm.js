import React, {useState}from 'react';


function TodoForm ({addTodo}) {

    const [todo, setTodo] = useState({
        id: Math.random() ,
        task:"",
        completed: false
    })

    function handleChange (e){
        setTodo({...todo,task:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        addTodo({...todo ,id:Math.random() });
        setTodo({...todo,task:""});
    }
    return (
        <div className="container formcontainer mt-3">
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control" name="task" 
                    value={todo.task}  
                    placeholder="Todo Name "
                    onChange={handleChange} 
                     />
                </div>
                <div class="form-group">
                <button className="btn btn-success ml-2" type="submit">Add</button>

                </div>

            </form>
        </div>
    )
}

export default TodoForm;
