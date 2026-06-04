import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // runs on every render
  useEffect(() => {
    console.log(`component rendered`);
  });

  //runs only once on mount
  useEffect(() => {
    console.log(`Component mounted`);
  }, []);

  // runs only conut changes
  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
    </>
  );
}

export default UseEffectDemo;
