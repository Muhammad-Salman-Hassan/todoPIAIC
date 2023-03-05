import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';



function App() {

  
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [list, setList] = useState([]);

  
  const renderLi = () => {
    let listItem = [];
    let i = 0;

    
    list.forEach((value, index) => {
      listItem.push(
        <li>{value}
          <button onClick={() => editTodo(index)}>edit</button>
          <button onClick={() => removeTodo(index)}>remove</button>
        </li>
      );

      
      if (i > 1) i = 0;
      else i++;
    });

    return listItem;
  };

 
  const addTodo = () => {
    const currentList = [...list];
    currentList.push(text);
    setList(currentList);
    setText("");
  };


  const editTodo = (index) => {
    setText(list[index]);
    setEditIndex(index);
  };


  const updateTodo = () => {
    const currentList = [...list];
    currentList[editIndex] = text;
    setList(currentList);
    setText("");
    setEditIndex(null);
  };

 
  const removeTodo = (index) => {
    const currentList = [...list];
    currentList.splice(index, 1);
    setList(currentList);
  };
  

  // JSX to display the todo list, input field, and buttons for adding/updating items
  return (
    <div className="App" style={{display:"flex",justifyContent:"center" ,alignItems:"center",flexDirection:"column"}}>
      <h1>REACT WEBPACK TODO APP BY SALMAN HASSAN (ASSIGNMENT)</h1>
      <br />
      <input onChange={(event) => setText(event.target.value)} type="text" value={text} />
      {(editIndex === null) ? <button onClick={addTodo}>Add</button> : <button onClick={updateTodo}>Update</button>}
      <ul>
        {renderLi()}
      </ul>
    </div>
  );
}

// Export the App component as the default export of the module
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
