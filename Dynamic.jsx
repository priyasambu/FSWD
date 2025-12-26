import React, { useState } from "react";

export default function Dynamic() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || workshop === "") {
      alert("Please fill all required fields!");
      return;
    }

    alert(
      "Registration Successful!\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Workshop: " + workshop + "\n" +
      "Message: " + message
    );
  }

  return (
    <>
      <h2>Online Workshop Registration</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <label>Select Workshop:</label><br />
        <select
          value={workshop}
          onChange={(e) => setWorkshop(e.target.value)}
        >
          <option value="">-- Select Workshop --</option>
          <option value="Web Development">Web Development</option>
          <option value="React Basics">React Basics</option>
          <option value="AI Fundamentals">AI Fundamentals</option>
        </select><br /><br />

        <label>Message:</label><br />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea><br /><br />

        <button type="submit">Register</button>
      </form>

      <hr />

      <h3>🔴 Live Preview</h3>
      <p><b>Name:</b> {name}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Workshop:</b> {workshop}</p>
      <p><b>Message:</b> {message}</p>
    </>
  );
}
