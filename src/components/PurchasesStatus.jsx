import React from 'react';

const PurchaseStatus = ({ status }) => {
  return (
    <div className={`purchase-status ${status}`}>
      <p>{status === 'success' ? 'Purchase successful!' : 'Purchase failed. Please try again.'}</p>
    </div>
  );
};

export default PurchaseStatus;
