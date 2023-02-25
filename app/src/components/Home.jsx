import React, { useState } from "react";
import Task from "./Task.jsx";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
  };
  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="Submit">ADD</button>
      </form>
      {tasks.map((item, index) => (
        <Task key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default Home;
