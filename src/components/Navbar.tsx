"use client";

import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to check if we are on the client-side
  const router = useRouter();

  // Ensure that the router is only used on the client side
  useEffect(() => {
    setIsClient(true); // Set the state to true once the component is mounted on the client
  }, []);

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
    }
  };

  if (!isClient) {
    return null; // Return null while we are not on the client-side to avoid trying to access router during SSR
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">Mansoury.</div>
      <ul className="navbar-links">
        <li><link href="#">Home</link></li>
        {/* <li><link href="#">Products</link></li>
        <li><link href="#">Pages</link></li> */}
        <li><link href="#">About Us</link></li>
        {/* <li><link href="#">Contact Us</link></li> */}
      </ul>
      <div className="navbar-actions">
        <button className="register-button" onClick={handleLoginClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon user-icon">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Login / Register
        </button>
        <button className="icon-button border-button" onClick={handleSearchClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </button>
      </div>

      {showSearchBar && (
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      )}
    </nav>
  );
};

export default Navbar;
