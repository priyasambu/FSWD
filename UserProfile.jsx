import React, { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    let newErrors = {};

    // Name validation
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // Age validation
    if (age.trim() === "") {
      newErrors.age = "Age is required";
    } else if (isNaN(age) || age <= 0) {
      newErrors.age = "Age must be a valid number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      alert(
        "Profile Updated Successfully!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Age: " + age
      );
    }
  }

  return (
    <>
      <h2>User Profile Editing</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Age:</label><br />
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>

        <button type="submit">Update Profile</button>
      </form>
    </>
  );
}
