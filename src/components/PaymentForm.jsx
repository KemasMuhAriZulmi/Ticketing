import React from 'react';

const PaymentForm = ({ formData, onChange, onSubmit }) => {
  return (
    <form>
      <label>
        Card Number:
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={onChange}
        />
      </label>
      <label>
        Expiration Date:
        <input
          type="text"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={onChange}
        />
      </label>
      <label>
        CVV:
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={onChange}
        />
      </label>
      <button type="button" onClick={onSubmit}>
        Buy Now
      </button>
    </form>
  );
};

export default PaymentForm;
