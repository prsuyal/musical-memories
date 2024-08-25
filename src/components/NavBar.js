import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/images/mm-logo.svg";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 pt-2 sm:pt-4 lg:px-8">
      <nav
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "bg-gray-100/70 backdrop-blur-lg shadow-lg rounded-full py-2 sm:py-3 px-3 sm:px-6"
            : "bg-transparent py-2 sm:py-4 px-0"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
          <a href="/">
              <img
                src={Logo}
                alt="Musical Memories Logo"
                className="h-6 w-6 sm:h-8 sm:w-8"
              />
            </a>
          </div>

          <form
            onSubmit={handleSearch}
            className={`${
              isScrolled ? "opacity-100 w-1/3 mx-2 sm:mx-4" : "opacity-0 w-0"
            } transition-all duration-300 ease-in-out overflow-hidden hidden md:block`}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-1 sm:py-2 px-3 sm:px-4 rounded-full bg-white/50 placeholder-gray-500 outline-none text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
              </button>
            </div>
          </form>
          <ul className="hidden md:flex items-center space-x-2 lg:space-x-6">
            <li>
              <a
                href="/about"
                className={`text-mm-dark hover:text-mm-blue transition-colors text-sm lg:text-base ${
                  location.pathname === "/about" ? "font-bold" : ""
                }`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/impact"
                className={`text-mm-dark hover:text-mm-blue transition-colors text-sm lg:text-base ${
                  location.pathname === "/impact" ? "font-bold" : ""
                }`}
              >
                Impact
              </a>
            </li>
            <li>
              <a
                href="/chapters"
                className={`text-mm-dark hover:text-mm-blue transition-colors text-sm lg:text-base ${
                  location.pathname === "/chapters" ? "font-bold" : ""
                }`}
              >
                Chapters
              </a>
            </li>
            <li>
              <a
                href="https://hcb.hackclub.com/donations/start/musical-memories"
                className={`text-mm-dark hover:text-mm-blue transition-colors text-sm lg:text-base`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </li>
            <li>
              <a
                href="/get-involved"
                className={`px-3 py-1 lg:px-4 lg:py-2 border border-mm-dark text-mm-dark rounded-full hover:bg-mm-dark hover:text-white transition-colors text-sm lg:text-base ${
                  location.pathname === "/get-involved" ? "font-bold" : ""
                }`}
              >
                Get Involved
              </a>
            </li>
          </ul>

          <button
            onClick={toggleMenu}
            className="md:hidden text-mm-dark focus:outline-none"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg p-3">
            <form onSubmit={handleSearch} className="mb-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-1 px-3 rounded-full bg-gray-100 placeholder-gray-500 outline-none text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  <Search className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </form>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className={`block py-1 text-mm-dark hover:text-mm-blue transition-colors text-sm ${
                    location.pathname === "/about" ? "font-bold" : ""
                  }`}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/impact"
                  className={`block py-1 text-mm-dark hover:text-mm-blue transition-colors text-sm ${
                    location.pathname === "/impact" ? "font-bold" : ""
                  }`}
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="/chapters"
                  className={`block py-1 text-mm-dark hover:text-mm-blue transition-colors text-sm ${
                    location.pathname === "/chapters" ? "font-bold" : ""
                  }`}
                >
                  Chapters
                </a>
              </li>
              <li>
                <a
                  href="https://hcb.hackclub.com/donations/start/musical-memories"
                  className="block py-1 text-mm-dark hover:text-mm-blue transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="/get-involved"
                  className={`block py-1 px-3 border border-mm-dark text-mm-dark rounded-full hover:bg-mm-dark hover:text-white transition-colors text-center text-sm ${
                    location.pathname === "/get-involved" ? "font-bold" : ""
                  }`}
                >
                  Get Involved
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
