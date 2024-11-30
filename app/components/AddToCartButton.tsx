"use client";

import React from "react";

type AddToCartButtonProps = {
  item: { id: string; name: string; price: number };
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ item }) => {
  const handleAddToCart = () => {
    console.log(`${item.name} has been added to the cart.`);
    // Logic to add the item to the cart can go here.
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCartButton;
