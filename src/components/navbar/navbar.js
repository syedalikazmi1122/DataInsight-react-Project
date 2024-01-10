import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
  function navigateAboutus()
  {
   navigate("/aboutus");
  }
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  sm:px-4  pt-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-blue-400 text-xl font-bold">Data Insight </div>

        {/* Hamburger menu for mobile view */}
        <div className="lg:hidden">
          <button
            className="text-blue-500 focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <div className="lg:flex-grow">
            <a
              href="/"
              className="block lg:inline-block text-gray-700  hover:text-blue-400 no-underline px-4 py-2"
            >
              Home
            </a>
            <a href="/aboutus">
              <button
                
                className="block lg:inline-block no-underline  hover:text-blue-400 text-gray-700 px-4 py-2"
                onClick={navigateAboutus}
              >
                About us
              </button>
            </a>
            <a
              href="/contact"
              className="block no-underline lg:inline-block hover:text-blue-400 text-gray-700 px-4 py-2"
            >
              Contact Us
            </a>

            <a
              href="/login"
              className="block no-underline lg:inline-block text-gray-700   px-4 hover:text-blue-400 py-2"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
