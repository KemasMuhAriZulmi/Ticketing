import React, { useState } from 'react';

const LoadMore = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [visibleItems, setVisibleItems] = useState(3);

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
  };

  return (
    <div>
      {items.slice(0, visibleItems).map(item => (
        <div key={item} className="bg-gray-200 p-2 mb-2">
          Item {item}
        </div>
      ))}
      {visibleItems < items.length && (
        <button onClick={handleLoadMore} className="bg-blue-500 text-white px-4 py-2 rounded">
          Lihat Lebih Banyak
        </button>
      )}
    </div>
  );
};

export default LoadMore;
