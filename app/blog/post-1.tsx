'use client';

import React from 'react';
import Link from 'next/link';
import '../../styles/Post.css';

const Post: React.FC = () => {
  return (
    <div className="post-container">
      <div className="back-to-blog">
        <Link href="/blog" className="back-link">← Back to Blog</Link>
      </div>

      <article className="post-content">
        <h1>How to Build a Modern Web Application</h1>
        <p className="post-date">Published on January 15, 2024</p>

        <div className="post-body">
          <p>
            In this article, we will explore the process of building a modern web application from scratch using popular tools like React, Next.js, and Tailwind CSS. The modern web application needs to be responsive, performant, and scalable, and we'll cover the best practices in each area.
          </p>
          <h2>Why Choose React?</h2>
          <p>
            React is one of the most popular JavaScript libraries for building user interfaces. It provides a component-based architecture that makes it easy to build reusable UI elements. When combined with Next.js for server-side rendering and Tailwind CSS for styling, it creates a powerful stack for building modern web applications.
          </p>
          <h2>Setting Up the Project</h2>
          <p>
            To get started, you'll need Node.js and npm installed on your machine. Then, create a new Next.js app using the following command:
          </p>
          <pre><code>npx create-next-app@latest my-web-app</code></pre>
          <p>
            After that, install Tailwind CSS and configure it for your Next.js project.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Post;
