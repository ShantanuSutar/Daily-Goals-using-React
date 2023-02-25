import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState(0);
  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form action="">
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>
        <button type="Submit">ADD</button>
      </form>
    </div>
  );
};

export default Home;
