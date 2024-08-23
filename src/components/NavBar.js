import React, { useState, useEffect } from "react";
import Logo from "../assets/images/mm-logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "bg-gray-100/70 backdrop-blur-lg shadow-lg rounded-full py-3 px-6"
            : "bg-transparent py-4 px-0"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="Musical Memories Logo" className="h-8 w-8" />
          </div>

          <form
            onSubmit={handleSearch}
            className={`${
              isScrolled ? "opacity-100 w-1/3 mx-4" : "opacity-0 w-0"
            } transition-all duration-300 ease-in-out overflow-hidden`}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 rounded-full bg-white/50 placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          <ul className="flex items-center space-x-6">
            <li>
              <a
                href="/about"
                className="text-mm-dark hover:text-mm-blue transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/impact"
                className="text-mm-dark hover:text-mm-blue transition-colors"
              >
                Impact
              </a>
            </li>
            <li>
              <a
                href="/chapters"
                className="text-mm-dark hover:text-mm-blue transition-colors"
              >
                Chapters
              </a>
            </li>
            <li>
              <a
                href="/donate"
                className="text-mm-dark hover:text-mm-blue transition-colors"
              >
                Donate
              </a>
            </li>
            <li>
              <a
                href="/get-involved"
                className="px-4 py-2 border border-mm-dark text-mm-dark rounded-full hover:bg-mm-dark hover:text-white transition-colors"
              >
                Get Involved
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
