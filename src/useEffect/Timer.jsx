import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("effect runs");

    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      console.log("cleanup runs"); // 👈 this proves cleanup works
      clearTimeout(timer);
    };
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer;
