"use client"; 
import React from "react";
import styles from "../../styles/ProductCard.module.css";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

type ProductCardProps = {
  id: string;
  name: string;
  price: string;
  image: string;
  showAddToCart: boolean; // Control button visibility
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, showAddToCart }) => {
  const item = { id, name, price: Number(price) };

  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={300} height={300} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>${Number(price).toFixed(2)}</p>
      {showAddToCart && <AddToCartButton item={item} />} {/* Show button conditionally */}
    </div>
  );
};

export default ProductCard;
