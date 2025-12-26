import React, { useState } from "react";

export default function DataDisplay() {
  const students = [
    { id: 1, name: "Arun", course: "BCA", year: "2nd Year" },
    { id: 2, name: "Priya", course: "BSc CS", year: "3rd Year" },
    { id: 3, name: "Karthik", course: "BCom", year: "1st Year" },
  ];

  const [page, setPage] = useState("home");

  return (
    <>
      <h2>Student Management Dashboard</h2>

      {/* Navigation */}
      <nav style={{ marginBottom: "15px" }}>
        <button onClick={() => setPage("home")}>Home</button>{" "}
        <button onClick={() => setPage("students")}>Students</button>{" "}
        <button onClick={() => setPage("about")}>About</button>
      </nav>

      <hr />

      {/* Page Content */}
      {page === "home" && (
        <div>
          <h3>Home</h3>
          <p>Welcome to the Student Management Dashboard.</p>
        </div>
      )}

      {page === "students" && (
        <div>
          <h3>Student List</h3>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {page === "about" && (
        <div>
          <h3>About</h3>
          <p>This dashboard helps manage and view student details.</p>
        </div>
      )}
    </>
  );
}
