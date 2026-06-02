import React, { useState } from "react";

function InputDemo() {
  const [name, setName] = useState("Rohit");

  return (
    <div>
      <h1>Name: {name || "Stranger"}</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("")}>Clear</button>
    </div>
  );
}

export default InputDemo;
