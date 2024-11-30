'use client'; // To handle routing on the client side

import React from 'react';
import { useRouter } from 'next/router'; // For accessing URL parameters

const Search = () => {
  const router = useRouter();
  const { query } = router.query; // Getting the query parameter from the URL

  // Here you can filter or fetch search results based on the query
  // For demonstration purposes, we'll just display the query
  return (
    <div className="search-results">
      <h1>Search Results for: {query}</h1>
      {/* Logic to display search results can go here */}
    </div>
  );
};

export default Search;
