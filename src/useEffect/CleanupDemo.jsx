import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("timer started");

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup — runs when component unmounts
    return () => {
      console.log("timer stopped");
      clearInterval(interval);
    };
  }, []);

  return <h1>Timer: {seconds}s</h1>;
}

function CleanupDemo() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>

      {show && <Timer />}
    </div>
  );
}

export default CleanupDemo;
