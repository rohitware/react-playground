import { useState } from "react";

function ObjectDemo() {
  const [user, setUser] = useState({
    name: "Rohit",
    age: 22,
    city: "Pune",
  });

  const handleClickCity = () => {
    setUser((perviouState) => {
      return { ...perviouState, city: "Mumbai" };
    });
  };
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Birthday
      </button>

      {/* <button onClick={() => setUser({ ...user, city: "Mumbai" })}>
        Move to mumbai
      </button> */}
      <button onClick={handleClickCity}>Move to Mumbai</button>
    </div>
  );
}

export default ObjectDemo;
