import React, { useRef } from "react";

function RefExample() {
  const countRef = useRef(0);

  function increase() {
    countRef.current += 1;

    console.log(countRef.current);
  }

  return (
    <>
      <h1>{countRef.current}</h1>

      <button onClick={increase}>Increase</button>
    </>
  );
}

export default RefExample;
