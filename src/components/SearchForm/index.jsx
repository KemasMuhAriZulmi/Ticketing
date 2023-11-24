// src/components/SearchForm.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect ke halaman pencarian dengan query
    history.push(`/search?q=${searchQuery}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2 rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
