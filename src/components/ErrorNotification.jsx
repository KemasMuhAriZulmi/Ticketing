import React from 'react';

const ErrorNotification = ({ message }) => {
  return (
    <div className="error-notification">
      <p>{message}</p>
    </div>
  );
};

export default ErrorNotification;
