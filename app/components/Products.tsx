"use client"; 
import React from "react";
import ProductGrid from "./ProductGrid"; // Ensure correct import path
import styles from "../../styles/Products.module.css";

// Ensure products array is correctly declared and passed
const Products: React.FC = () => {
  const products = [
    { id: "1", image: "/images/washing-product.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { id: "2", image: "/images/dishwasher.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { id: "3", image: "/images/pot.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { id: "4", image: "/images/fridge2.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { id: "5", image: "/images/kitchen.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { id: "6", image: "/images/oven1.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { id: "7", image: "/images/fridge1.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { id: "8", image: "/images/oven2.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { id: "9", image: "/images/pot2.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
    { id: "10", image: "/images/washingmachine.png", name: "Bosh 300 Series SHEM63W55N", price: "998$" },
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Our Products</h1>
        <p>Explore a wide range of high-quality products at the best prices!</p>
      </header>
      <ProductGrid title="Featured Products" products={products} />
    </div>
  );
};

export default Products;
