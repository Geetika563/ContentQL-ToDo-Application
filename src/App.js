// App.js


import React, { useState, useEffect } from 'react';
import ToDo from "./components/ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo, markToDoAsCompleted } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'active'

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  useEffect(() => {
    filterTodos(filter);
  }, [filter, toDo]);

  const filterTodos = (status) => {
    if (status === 'all') {
      setFilteredTodos(toDo);
    } else if (status === 'completed') {
      setFilteredTodos(toDo.filter(item => item.completed));
    } else if (status === 'active') {
      setFilteredTodos(toDo.filter(item => !item.completed));
    }
  };

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  const markAsCompleted = async (_id) => {
    try {
      await markToDoAsCompleted(_id);
      const updatedTodos = toDo.map(item => item._id === _id ? { ...item, completed: true } : item);
      setToDo(updatedTodos);
    } catch (error) {
      console.error('Error marking task as completed:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1> To Do App </h1>
        <div className="top">
          <input 
            type="text" 
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div 
            className="add" 
            onClick={ isUpdating ? 
                () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating) 
              : () => addToDo(text, setText, setToDo)}> 
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="filter-buttons">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('active')}>Active</button>
        </div>
        <div className="list">
  {filteredTodos.map((item) => (
    <ToDo
      key={item._id}
      text={item.text}
      isCompleted={item.completed}
      updateMode={() => updateMode(item._id, item.text)}
      deleteToDo={() => deleteToDo(item._id, setToDo)}
      markAsCompleted={() => markAsCompleted(item._id)} // Pass down markAsCompleted function
    />
  ))}
</div>

        <div className="list"></div>
      </div>
    </div>
  );
}

export default App;




