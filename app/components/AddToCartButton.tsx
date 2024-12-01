"use client";
import React from "react";
import { useCart } from "../../context/CartContext"; // Import the CartContext

type AddToCartButtonProps = {
  item: { id: string; name: string; price: number }; // Define the item type
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ item }) => {
  const { addToCart } = useCart(); // Get the addToCart function from CartContext

  const handleAddToCart = () => {
    addToCart(item); // Call the addToCart function when button is clicked
  };

  return (
    <button onClick={handleAddToCart} className="add-to-cart-button">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
