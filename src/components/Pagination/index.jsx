import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, totalPages }) => {
  const generatePages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Link
          key={i}
          to={`/events?page=${i}`}
          className={`px-4 py-2 mr-2 border rounded-md ${
            currentPage === i ? "bg-blue-500 text-white" : ""
          }`}
        >
          {i}
        </Link>
      );
    }
    return pages;
  };

  return <div className="mt-8">{generatePages()}</div>;
};

export default Pagination;
