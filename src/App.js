import './App.css';
import React, {useState , useEffect}from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// import Welcome from './components/Welcome';


function App() {
 
  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "storeitems";
  useEffect(() => {
    const localItem = JSON.parse( localStorage.getItem('LOCAL_STORAGE_KEY'))
    if(localItem){
      setTodos(localItem);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('LOCAL_STORAGE_KEY', JSON.stringify(todos));
    
  }, [todos])

  function addTodo(todo){
    setTodos([...todos,todo]);
  }

  function toggleTodo(id){
    setTodos(
    todos.map((todo)=>{
      if(todo.id === id ){

        return {
          ...todo,
          completed: !todo.completed
        }
      }
        return todo;
      
    })

    )
  }

  function removeTodo(id){
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const [name, setName] = useState({person:""})
  useEffect(() => {
    const namelocal = JSON.parse( localStorage.getItem('name'))
    if(namelocal){
      setName(namelocal);
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
    
  }, [name])

  let input = window.document.getElementById('nameInput');

function handleSubmitName(e){
    e.preventDefault();
    setName({...name,person:input.value});

}
  if(name.person == ""){
    return(
        <div id="nameForm">
            <div className="title text-center">
              <h2> Welcome. </h2>
            </div>
            <div className="container formcontainer mt-3">

              <form className="form-inline" onSubmit={handleSubmitName}>
              <div className="form-group">

              <input className="form-control" type="text" id="nameInput" placeholder="Write Your Name"/>
              </div>
              <div className="form-group">

              <button className="btn btn-success ml-2" type="submit" >Add</button>
              </div>
              </form>
            </div>
        </div>    
      )
  }else{
    return (
      <div className="App container appcontainer">
          <div className="title">
            <h1> Todo. </h1>
            <h5> Hey  {name.person} you Can do it.</h5>
          </div>
         <TodoForm addTodo={addTodo}/>
         <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      </div>
    );
  }
 
}

export default App;
