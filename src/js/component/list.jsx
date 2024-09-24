import React from "react";
import { useEffect, useState } from "react";

const List = () => {
    const [task, setTask] = useState("");
    const [newTask, setNewTask] = useState([]);

    const handleSubmit = (e) => { 
      if (e.key === "Enter") {
        if (task.trim()) {
          setNewTask([...newTask, task]);
          setTask('');
      }
      }
    };
    
    const deleteItem = (index) => {
      setNewTask(newTask.filter((_, i) => i !== index));
    };
      return (
          <div>
            <ul>
             
             <input type="text" value={task} 
              onKeyDown={handleSubmit} 
              onChange={(e) => setTask(e.target.value)} />
              {newTask.map((item, index) => (  
            <li key={index}>{item}</li>
              ))}
            <button className="btn btn-sm delete-button" onClick={() => deleteItem(index)}>X</button>
            <li className="count list-group-item text-start">{newTask.length} items left</li>
            </ul>
          </div>
        );
  };


export default List;