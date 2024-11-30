"use client";

import React from "react";
import { useCart } from "../../context/CartContext";

const CartPage: React.FC = () => {
  const { cart, total } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price} x {item.quantity}</p>
        </div>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default CartPage;
