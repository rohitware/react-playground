import React, { useState } from "react";

function ArrayDemo() {
  const [names, setName] = useState(["Rohit", "Amit", "Raj"]);

  const handleAdd = () => {
    setName((prev) => [...prev, "new name"]);
  };

  const handleRemove = () => {
    setName((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <h1>Names:</h1>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
      <button onClick={handleAdd}>Add Name</button>

      <button onClick={handleRemove}>Remove Last</button>
    </>
  );
}

export default ArrayDemo;
