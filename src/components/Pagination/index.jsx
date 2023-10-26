import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex">
        {pageNumbers.map(page => (
          <li
            key={page}
            className={`mx-1 px-3 py-2 rounded cursor-pointer ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
