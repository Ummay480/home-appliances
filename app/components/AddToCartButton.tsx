"use client";

import React from "react";
import { useCart } from "../context/CartContext";

const AddToCartButton: React.FC<{ item: { id: number; name: string; price: number } }> = ({ item }) => {
  const { addToCart } = useCart();

  return <button onClick={() => addToCart({ ...item, quantity: 1 })}>Add to Cart</button>;
};

export default AddToCartButton;
