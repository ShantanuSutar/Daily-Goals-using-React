import React, { useState } from "react";
import Task from "./Task.jsx";

const Home = () => {
  const { tasks, setTasks } = useState([]);
  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form action="">
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>
        <button type="Submit">ADD</button>
      </form>
      <Task />
    </div>
  );
};

export default Home;
