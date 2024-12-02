"use client";
import React from "react";
import "../../styles/HotDeals.css";

type Product = {
  name: string;
  price: string;
  discountedPrice: string;
  imageUrl: string;
};

const HotDeals: React.FC = () => {
  const products: Product[] = [
    { name: "Bosch 300 Series SHEM63W55N", price: "1200$", discountedPrice: "998$", imageUrl: "/images/oven4.png" },
    { name: "Bosch 300 Series SHEM63W55N", price: "1200$", discountedPrice: "998$", imageUrl: "/images/dishwasher.png" },
    { name: "Bosch 300 Series SHEM63W55N", price: "1200$", discountedPrice: "998$", imageUrl: "/images/pot.png" },
    { name: "Bosch 300 Series SHEM63W55N", price: "1200$", discountedPrice: "998$", imageUrl: "/images/fridge2.png" },
  ];

  return (
    <section className="hot-deals">
      <div className="hot-deals__info">
        <h2>
          Discover Hot Deals <br /> for Your Home!
        </h2>
        <p>
          In Mansoury, daily you can find the highest discounts across all
          categories and products available on the website.
        </p>
        <button className="hot-deals__show-all">Show All Products</button>
      </div>
      <div className="hot-deals__carousel">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-card__image"
            />
            <h3 className="product-card__name">{product.name}</h3>
            <div className="product-card__prices">
              <span className="product-card__price">{product.discountedPrice}</span>
              <span className="product-card__original-price">{product.price}</span>
            </div>
            <button className="product-card__cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="20" /* Slightly larger for visibility */
                height="20"
                style={{ transform: "scaleX(-1)" }} /* Flip horizontally */
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a1 1 0 0 0 .99.81h12.72a1 1 0 0 0 .98-.8l2-10H5.21"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotDeals;
