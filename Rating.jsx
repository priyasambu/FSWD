import React, { useState } from "react";

export default function Rating() {
  const [studentName, setStudentName] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (studentName === "" || rating === "" || comments === "") {
      alert("Please fill all fields");
      return;
    }

    alert(
      "Feedback Submitted Successfully!\n\n" +
      "Student Name: " + studentName + "\n" +
      "Rating: " + rating + " Star(s)\n" +
      "Comments: " + comments
    );
  }

  return (
    <>
      <h2>Student Feedback System</h2>

      <form onSubmit={handleSubmit}>
        <label>Student Name:</label><br />
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        /><br /><br />

        <label>Rating:</label><br />
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">-- Select Rating --</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select><br /><br />

        <label>Comments:</label><br />
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea><br /><br />

        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
}
