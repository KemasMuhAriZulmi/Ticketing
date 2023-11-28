import React from 'react';

const LikeButton = ({ count }) => {
  return (
    <div className="flex items-center">
      <button className="text-red-500 mr-1">
        <i className="far fa-heart"></i>
      </button>
      <span>{count}</span>
    </div>
  );
};

export default LikeButton;
