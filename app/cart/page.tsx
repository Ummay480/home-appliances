"use client";
import React from "react";
import { useCart } from "../../context/CartContext";

const Cart: React.FC = () => {
  const { cart, } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => (item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
