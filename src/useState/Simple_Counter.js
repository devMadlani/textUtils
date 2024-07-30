import React, { useState } from "react";

function SimpleCounter() {
    
  const [count, setCount] = useState(0);

  const incremetCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <h2>Count : {count}</h2>
      <button onClick={incremetCount}>Add</button>
    </div>
  );
}

export default SimpleCounter;
