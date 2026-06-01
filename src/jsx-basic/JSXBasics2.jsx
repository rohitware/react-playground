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

  const users = ["Rohit", "Amar"];

  const fruits = ["Apple", "Banana"];

  const colors = ["Red", "Blue"];

  const cities = ["Pune", "Mumbai"];

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
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>

      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default JSXBasics2;
