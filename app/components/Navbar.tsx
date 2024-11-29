"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // Correct import for App Router
import '../../styles/Navbar.css';

const Navbar = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Mansoury.</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="register-button" onClick={handleLoginClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon user-icon"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Login / Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
