import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/images/mm-logo.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                href="https://docs.google.com/forms/d/e/1FAIpQLSfpZDwA1pvCyDs6h1tYB0-3vGZqZw76NrCbez3RSs4PQqy_zQ/viewform?usp=dialog"
                className={`text-mm-dark hover:text-mm-blue transition-colors text-sm lg:text-base`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Research
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