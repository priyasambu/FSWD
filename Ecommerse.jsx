import React, { useState } from "react";

export default function Ecommerse() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
    alert(product.name + " added to cart");
  }

  return (
    <>
      <h2>E-Commerce Product Listing</h2>

      <div>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <hr />

      <h3>Cart Items ({cart.length})</h3>
      {cart.length === 0 && <p>Your cart is empty</p>}

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </>
  );
}
