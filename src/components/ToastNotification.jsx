import React from 'react';

const ToastNotification = ({ message, onClose }) => {
  return (
    <div className="toast-notification">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ToastNotification;
