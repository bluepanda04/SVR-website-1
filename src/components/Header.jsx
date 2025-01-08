import React from "react";
import svrlogo from "../assets/svrlogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-700 text-white px-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={svrlogo}
            alt="Logo"
            className="h-16 w-24 m-2 bg-white rounded-md"
          />
          
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300 font-semibold text-xl">
            Home
          </a>
          <Link to="/Products" href="#about" className="hover:text-gray-300 font-semibold text-xl">
            Products
          </Link>
          <a href="#services" className="hover:text-gray-300 font-semibold text-xl">
            Contact
          </a>
          <a href="#contact" className="hover:text-gray-300 font-semibold text-xl">
            Careers
          </a>
          <a href="#contact" className="hover:text-gray-300 font-semibold text-xl">
            Events
          </a>
          <a href="#contact" className="hover:text-gray-300 font-semibold text-xl">
            Downloads
          </a>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
