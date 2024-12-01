"use client";
import React from "react";
import { useCart } from "../../context/CartContext";

type AddToCartButtonProps = {
  item: { id: string; name: string; price: number };
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1, // Default quantity
    });
  };

  return (
    <button onClick={handleAddToCart} className="add-to-cart-button">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
