import React, { useState, useContext } from "react";
import AuthContext from "./AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <h2>My App</h2>
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Please login</span>
      )}
    </nav>
  );
}

function Dashboard() {
  const { user } = useContext(AuthContext);

  if (!user) return <h2>You are not logged in!</h2>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

function AuthDemo() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Rohit", email: "rohitware@gmail.com", role: "admin" });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        <Navbar />
        <Dashboard />
        {!user && <button onClick={login}>login</button>}
      </AuthContext.Provider>
    </>
  );
}

export default AuthDemo;
