"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductCard from "../components/ProductCard"; // Adjust the path
import AddToCartButton from "../components/AddToCartButton"; // Adjust the path
import styles from "../../styles/ProductDetails.module.css";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  showAddToCart?: boolean;
  description: string;
};

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic route parameter
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      // Simulate fetching product data (replace with an actual API call)
      const fetchProduct = async () => {
        const mockData: Product[] = [
          { id: "1", name: "Product A", price: 49.99, image: "/images/product-a.jpg", description: "This is Product A" },
          { id: "2", name: "Product B", price: 29.99, image: "/images/product-b.jpg", description: "This is Product B" },
        ];
        const productData = mockData.find((p) => p.id === id);
        setProduct(productData || null);
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>; // Loading state
  }

  // Wrap ProductCard with the product's data
  return (
    <div className={styles.productDetails}>
      <ProductCard
        id={product.id}
        name={product.name}
        price={product.price.toFixed(2)}
        image={product.image}
        showAddToCart={true}
      />
      <div className={styles.productInfo}>
        <h1>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <AddToCartButton item={{ id: product.id, name: product.name, price: product.price }} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
