import React from "react";
import { Link } from "react-router-dom";

const UnauthorizedPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-red-500 text-5xl font-bold mb-4">401</div>
        <div className="text-red-500 text-xl font-semibold mb-4">
          Unauthorized Access
        </div>
        <p className="text-gray-500 text-base mb-8">
          You don't have the necessary permissions to access this page.
        </p>
        <Link className="text-red-500 hover:underline" to="/">
          Go back to the home page
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
