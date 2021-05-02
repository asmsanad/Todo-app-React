import React from "react";
import './index.css';
import Todo from "./Todo";

function App() {
  const [list, setList] = React.useState([]);
  const [id, setid] = React.useState(0);
  const todo = {};

  const add = ()=>{
    if (document.getElementById('gettext').value){
      todo.id = id;
      todo.status = false;
      todo.text = document.getElementById('gettext').value;
      setList([...list,todo]);
      setid(id+1);
      document.getElementById('gettext').value = null;
    }else{
      alert("Please Type Something !!!");
    }
    
  }

 
  return (
    <React.Fragment>
      <h1 id="title">Todo App</h1>
      <input id="gettext"></input>
      <button onClick={add}>Add</button>

      {
        list.map(todo => {
          const {id} =todo;
          return <Todo key={id} {...todo}/> 
        }
      )}
      
    </React.Fragment>
  );
}

export default App;
