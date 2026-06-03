import React, { useState } from "react";

function PrevStateDemo() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Increament</button>
    </div>
  );
}

export default PrevStateDemo;
