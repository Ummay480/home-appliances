"use client";

import React from "react";
import ProductCard from "./ProductCard"; // Ensure this import path is correct
import styles from "../../styles/ProductGrid.module.css"; // Ensure this import path is correct

type ProductGridProps = {
  title: string;
};

const ProductGrid: React.FC<ProductGridProps> = ({ title }) => {
  // Sample product data with price as a number for better flexibility
  const products = [
    { image: "/images/washing-product.png", name: "Bosh 300 Series SHEM63W55N", price: 998 },
    { image: "/images/dishwasher.png", name: "Bosh 300 Series SHEM63W55N", price: 998 },
    { image: "/images/pot.png", name: "Bosh 300 Series SHEM63W55N", price: 998 },
    { image: "/images/fridge2.png", name: "Bosh 300 Series SHEM63W55N", price: 998 },
    { image: "/images/kitchen.png", name: "Bosh 300 Series SHEM63W55N", price: 998 },
    { image: "/images/oven1.png", name: "Bosh 300 Series SHEM63W55N", price: 998 },
    { image: "/images/fridge1.png", name: "Bosh 300 Series SHEM63W55N", price: 998 },
    { image: "/images/oven2.png", name: "Bosh 300 Series SHEM63W55N", price: 998 },
    { image: "/images/pot2.png", name: "Bosh 300 Series SHEM63W55N", price: 998 },
    { image: "/images/washingmachine.png", name: "Bosh 300 Series SHEM63W55N", price: 998 },
  ];

  return (
    <section className={styles.gridSection}>
      <h2 className={styles.title}>{title}</h2> {/* Rendering the title prop */}
      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={String(index)} // If you have a unique ID for each product, use it
            image={product.image}
            name={product.name}
            price={product.price.toString()} // Ensure price is passed as a string
            showAddToCart={true} // Assuming you want to show the button
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
