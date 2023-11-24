// src/pages/SearchResults.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import EventList from "../components/EventList";

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
      {/* Menampilkan hasil pencarian */}
      <EventList />
    </div>
  );
};

export default SearchResults;
