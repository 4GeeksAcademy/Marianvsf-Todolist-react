import React from "react";
import { useState } from "react";

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
          <div style={{width: "500px", margin:"auto"}}>
            <ul className="list-group ">
             <input type="text" value={task} 
              onKeyDown={handleSubmit} 
              onChange={(e) => setTask(e.target.value)} placeholder={task== "" ? "What needs to be done?" : task } />
              {newTask.map((item, index) => (  
            <li className="list list-group-item list-group-item-light text-start" key={index} 
            style={{ display: 'flex', justifyContent: 'space-between' }}>{item}
            <button className="btn btn-sm delete-button"
            onClick={() => deleteItem(index)}>x</button></li>
              ))}
            <li className="count list-group-item text-start"
            style={{color: "gray"}}>{newTask.length} items left</li>
            </ul>
          </div>
        );
  };


export default List;