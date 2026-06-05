import React, { useEffect, useState } from "react";

function Timer2() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log(`Interval start`);

    const interval = setInterval(() => {
      setSeconds((pre) => pre + 1);
    }, 1000);

    return () => {
      console.log(`Interval cleared`);
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1>Timer: {seconds}</h1>
    </div>
  );
}

export default Timer2;
