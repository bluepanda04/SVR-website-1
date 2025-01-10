import React, { useState } from "react";
import svrlogo from "../assets/svrlogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white px-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={svrlogo}
            alt="Logo"
            className="h-12 w-auto m-2 bg-white rounded-md"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 font-semibold text-lg">
            Home
          </Link>
          <Link
            to="/Products"
            className="hover:text-gray-300 font-semibold text-lg"
          >
            Products
          </Link>
          <Link to="/Contact" className="hover:text-gray-300 font-semibold text-lg">
            Contact
          </Link>
          <Link to="/Careers" className="hover:text-gray-300 font-semibold text-lg">
            Careers
          </Link>
          <Link to="/Events" className="hover:text-gray-300 font-semibold text-lg">
            Events
          </Link>
          <Link to="/Downloads" className="hover:text-gray-300 font-semibold text-lg">
            Downloads
          </Link>
          <Link to="/Support" className="hover:text-gray-300 font-semibold text-lg">
            Need Help?
          </Link>
        </nav>

        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.facebook.com/svrrobotics?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=R1ZYQdM3C8E&t=9s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/_____svr.robotics/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/svr-robotics/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-600 py-4 space-y-4">
          <Link
            to="/"
            className="block text-center hover:text-gray-300 font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Products"
            className="block text-center hover:text-gray-300 font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/Contact"
            className="block text-center hover:text-gray-300 font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/Careers"
            className="block text-center hover:text-gray-300 font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/Events"
            className="block text-center hover:text-gray-300 font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/Downloads"
            className="block text-center hover:text-gray-300 font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Downloads
          </Link>
          <Link
            to="/Support"
            className="block text-center hover:text-gray-300 font-semibold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Need Help?
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
