"use client"
import React from "react";
import Image from "next/image"; // If using Next.js for optimized images
import styles from "../../styles/Banner.module.css"; // Ensure this path is correct

type BannerProps = {
  imageSrc: string;
  width: number;
  height: number;
};

const Banner: React.FC<BannerProps> = ({ imageSrc, width, height }) => {
  return (
    <div className={styles.banner}>
      <Image
        src={imageSrc}
        alt="Banner"
        width={width} // Apply the width prop
        height={height} // Apply the height prop
        className={styles.bannerImage}
      />
    </div>
  );
};

export default Banner;
