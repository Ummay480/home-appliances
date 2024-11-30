'use client';

import React from 'react';
import Link from 'next/link';
import '../../styles/Blog.css';

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Our Latest Articles</h1>
        <p>Stay updated with our latest news and insights.</p>
      </header>

      <section className="blog-posts">
        <div className="blog-post">
          <h2>
            <Link href="/blog/post-1"passHref>How to Build a Modern Web Application</Link>
          </h2>
          <p className="excerpt">
            A comprehensive guide to building modern web applications with React, Next.js, and Tailwind CSS.
          </p>
          <Link href="/blog/post-1" className="read-more">Read More</Link>
        </div>

        <div className="blog-post">
          <h2>
            <Link href="/blog/post-2"passHref>Top 10 Web Design Trends for 2024</Link>
          </h2>
          <p className="excerpt">
            Discover the most exciting web design trends that are going to dominate the internet in 2024.
          </p>
          <Link href="/blog/post-2"passHref className="read-more">Read More</Link>
        </div>

        <div className="blog-post">
          <h2>
            <Link href="/blog/post-3"passHref>Optimizing Performance in React</Link>
          </h2>
          <p className="excerpt">
            Learn how to improve the performance of your React applications with these simple yet effective tips.
          </p>
          <Link href="/blog/post-3" className="read-more">Read More</Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
