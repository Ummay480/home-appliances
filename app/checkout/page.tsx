"use client";

import React from "react";
import { useCart } from "../../context/CartContext";

const CheckoutPage: React.FC = () => {
  const { cart, total, clearCart } = useCart();

  const handleCheckout = () => {
    // Mock checkout process
    alert("Thank you for your purchase!");
    clearCart();
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="checkout-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <span>Quantity: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="checkout-total">
        <h2>Total: ${total.toFixed(2)}</h2>
        <button onClick={handleCheckout}>Place Order</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
