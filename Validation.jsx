import React, { useState } from "react";

export default function Validation() {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    let newErrors = {};

    // ✅ Required Field Validation
    if (email.trim() === "") {
      newErrors.email = "Email is required";
    }
    if (age.trim() === "") {
      newErrors.age = "Age is required";
    }
    if (password.trim() === "") {
      newErrors.password = "Password is required";
    }
    if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm password is required";
    }

    // ✅ Regular Expression Validation (Email)
    const emailRegex = /\S+@\S+\.\S+/;
    if (email && !emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // ✅ Range Validation (Age between 18 and 60)
    if (age && (isNaN(age) || age < 18 || age > 60)) {
      newErrors.age = "Age must be between 18 and 60";
    }

    // ✅ Compare Validation (Password & Confirm Password)
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      alert("Login Successful!");
    }
  }

  return (
    <>
      <h2>Login Form with Full Validation</h2>

      <form onSubmit={handleSubmit}>
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

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <div>
          <label>Confirm Password:</label><br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
}

