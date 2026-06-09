import { useState, useCallback } from "react";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

export default UseCallbackDemo;
