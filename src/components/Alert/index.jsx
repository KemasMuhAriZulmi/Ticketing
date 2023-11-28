// Toast.js
import React from "react";

const Toast = (props) => {
  const { type, message, onClose } = props;

  const toastClasses = `fixed bottom-0 right-0 m-4 p-4 rounded ${
    type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : ""
  }`;

  return (
    <div className={toastClasses}>
      <div className="flex items-center">
        <p className="text-white">{message}</p>
        <div className="ml-4 cursor-pointer" onClick={onClose}>
          {" "}
          {/* Move the icon container to the right */}
          {type === "success" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-green-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-red-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toast;
