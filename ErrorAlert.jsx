import React, { useState } from "react";

export default function ErrorAlert() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Hardcoded credentials (simulation)
    const validUsername = "admin";
    const validPassword = "admin123";

    // Error: empty fields
    if (username === "" || password === "") {
      alert("Error: Username and Password are required!");
      return;
    }

    // Authentication check
    if (username === validUsername && password === validPassword) {
      alert("Login Successful! Welcome " + username);
    } else {
      alert("Error: Invalid Username or Password!");
    }
  }

  return (
    <>
      <h2>Basic Authentication System</h2>

      <form onSubmit={handleLogin}>
        <label>Username:</label><br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />

        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Login</button>
      </form>
    </>
  );
}
