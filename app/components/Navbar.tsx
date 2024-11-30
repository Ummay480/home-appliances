'use client'; // Ensure client-side rendering

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for App Router
import { FaCartPlus, FaSearch } from 'react-icons/fa'; // Importing cart and search icons
import Link from 'next/link'; // Import Link for navigation
import '../../styles/Navbar.css';

const Navbar: React.FC = () => {
  const router = useRouter();
  
  // State to toggle the search input visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Handle login button click
  const handleLoginClick = () => {
    router.push('/login'); // Redirect to login page
  };

  // Handle search button click to toggle input visibility
  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search input visibility
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-brand">
        <Link href="/" passHref>
          Mansoury.
        </Link>
      </div>

      {/* Navigation links */}
      <ul className="navbar-links">
        <li>
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" passHref>
            Products
          </Link>
        </li>
        <li>
          <Link href="/pages" passHref>
            Pages
          </Link>
        </li>
        <li>
          <Link href="/aboutUs" passHref>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Right-side action buttons (Login/Register, Cart, Search) */}
      <div className="navbar-actions">
        {/* Login/Register Block */}
        <div className="border-block">
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

        {/* Cart Block */}
        <div className="border-block">
          <button className="cart-button">
            <FaCartPlus className="icon" />
          </button>
        </div>

        {/* Search Block */}
        <div className="border-block">
          <button className="search-button" onClick={handleSearchClick}>
            <FaSearch className="icon" />
          </button>
          
          {/* Conditional Search Input */}
          {isSearchOpen && (
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                onBlur={() => setIsSearchOpen(false)} // Close input when clicked outside
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
