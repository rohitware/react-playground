import React, { useRef } from "react";

function RefName() {
  const nameRef = useRef("Rohit");

  function changeName() {
    nameRef.current = "Amar";

    console.log(nameRef.current);
  }

  return (
    <>
      <h2>Name: {nameRef.current}</h2>

      <button onClick={changeName}>Change Name</button>
    </>
  );
}

export default RefName;
