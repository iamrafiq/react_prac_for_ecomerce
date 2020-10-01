import React, { Component, useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  const incremeant = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h2>Counter App</h2>
      <button onClick={incremeant}>Clicked {count} times</button>
    </div>
  );
};

export default App;
