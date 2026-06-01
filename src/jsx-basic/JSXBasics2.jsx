import React from "react";

function JSXBasics2() {
  const name = "Rohit";
  const age = 33;
  const isLoggedIn = true;
  const styles = {
    color: "tomato",
    fontSize: "24px",
    fontWeight: "bold",
  };
  return (
    <div>
      {/* 1. inline style — object with camelCase  */}
      <h1 style={styles}>Hello {name} </h1>

      {/* 2. inline css */}
      <p style={{ color: "blue" }}> Age: {age}</p>

      {/* 3. className not class */}
      <p className="subtitle">
        Status: {isLoggedIn ? "logged in" : "logged out"}
      </p>

      {/* 4. self closing tags must close */}
      <input type="text" placeholder="type here" />
      <br />
    </div>
  );
}

export default JSXBasics2;
