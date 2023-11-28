import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-blue-500 text-5xl font-bold mb-4">404</div>
        <div className="text-blue-500 text-xl font-semibold mb-4">
          Page Not Found
        </div>
        <p className="text-gray-500 text-base mb-8">
          The page you are looking for does not exist.
        </p>
        <Link className="text-blue-500 hover:underline" to="/">
          Go back to the home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
