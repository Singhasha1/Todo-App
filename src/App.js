import { useState } from 'react';
import './App.css'
import TodoList from './TodoList';

function App() {
  const [initialList, setInputList] = useState("");
  const [initialItem, changeItem] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }

  const addItem = () =>{
    changeItem((oldItems)=> {
      return[...oldItems, initialList]
    });
    setInputList("");
  };

  const dltItem =(id) =>{
    console.log("deleted");
    changeItem((oldItems)=>{
      return oldItems.filter((arrElem, index) =>{
        return index !== id;
      })
    }
    )
};
  return (
    <>
    <div className="mn-todo">
    <div className="inner-todo">
        <h1>Todo list</h1>
        <input type="text" placeholder="Add items" value={initialList} onChange={itemEvent} />
        <button onClick={addItem}>+</button>
        <ol>
        
          {
            initialItem.map((itemval, index)=> (
              <TodoList 
              text = {itemval} 
              place={index} 
              id={index}
              onSelect={dltItem}
              />
            ))
          }
        </ol>
    </div>
    </div>
    </>
  );
}

export default App;
