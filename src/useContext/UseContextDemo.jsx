import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
    </>
  );
}

function UseContextDemo() {
  const [userData] = useState({ name: "Rohit", email: "rohit@gmail.com" });
  return (
    <>
      <UserContext.Provider value={userData}>
        <h1>User Context Demo</h1>
        <Profile />
      </UserContext.Provider>
    </>
  );
}

export default UseContextDemo;
