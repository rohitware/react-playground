import { useState, useMemo } from "react";

function slowFunction(num) {
  console.log("calculating...");
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
}

function UseMemoDemo() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div>
      <h1>Result: {result}</h1>
      <h1>Number: {number}</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setNumber(number + 1)}>Change Number</button>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default UseMemoDemo;
