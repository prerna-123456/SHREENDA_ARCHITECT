import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-gray-800 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-100 opacity-80"></div>
            <span className="text-sm tracking-widest font-light">SHREENDA</span>
          </div>
        </div>
      </nav>

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-7xl md:text-8xl font-bold mb-6">404</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            This page doesn't exist
          </p>
          <p className="text-gray-400 mb-12">
            The space you're looking for has been redesigned or relocated.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-amber-100 text-black font-semibold text-sm tracking-widest hover:bg-amber-200 transition duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
