import React, { useState } from "react";

export default function LoginInterface() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (username === "" || role === "") {
      alert("Please enter username and select a role");
      return;
    }

    if (role === "admin") {
      alert("Welcome Admin " + username + "!\nRedirecting to Admin Dashboard...");
    } else if (role === "user") {
      alert("Welcome User " + username + "!\nRedirecting to User Home Page...");
    }
  }

  return (
    <>
      <h2>Login Interface</h2>

      <form onSubmit={handleLogin}>
        <label>Username:</label><br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />

        <label>Select Role:</label><br />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">-- Select Role --</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select><br /><br />

        <button type="submit">Login</button>
      </form>
    </>
  );
}
