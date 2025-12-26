import React, { useState } from "react";

export default function Browsing() {
  const products = {
    Electronics: ["Laptop", "Mobile", "Headphones"],
    Clothing: ["T-Shirt", "Jeans", "Jacket"],
    Books: ["JavaScript Guide", "React Basics", "Data Structures"],
  };

  const [category, setCategory] = useState("Electronics");

  return (
    <>
      <h2>Product Browsing</h2>

      {/* Category Navigation */}
      <nav style={{ marginBottom: "15px" }}>
        <button onClick={() => setCategory("Electronics")}>
          Electronics
        </button>{" "}
        <button onClick={() => setCategory("Clothing")}>
          Clothing
        </button>{" "}
        <button onClick={() => setCategory("Books")}>
          Books
        </button>
      </nav>

      <hr />

      {/* Category Content */}
      <h3>{category}</h3>
      <ul>
        {products[category].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
