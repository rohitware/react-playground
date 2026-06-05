import React, { useEffect, useState } from "react";

// --- COMPONENT 1: Fetch and display a single user ---
function FetchDemo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log("Something went wrong", err);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <h3>Loading single user...</h3>;

  return (
    <div
      style={{ padding: "10px", background: "#f0f0f0", marginBottom: "20px" }}
    >
      <h2>Single User Detail (FetchDemo)</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

// --- COMPONENT 2: Fetch and display all users ---
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("All users fetch error:", err);
      }
    }
    loadUsers();
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      {/* Rendering the Single User component at the top */}
      <FetchDemo />

      <hr />

      <h2>All Users List</h2>
      {users.length === 0 ? (
        <h3>Loading users list...</h3>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.id}. {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Export the main component that wraps everything
export default Users;
