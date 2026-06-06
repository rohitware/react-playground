import React, { useState } from "react";

function StateName() {
  const [name, setName] = useState("Rohit");

  return (
    <>
      <h2>Name: {name}</h2>

      <button onClick={() => setName("Amar")}>Change Name</button>
    </>
  );
}

export default StateName;
