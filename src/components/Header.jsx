import React, { useState } from "react";
import svrlogo from "../assets/svrlogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="text-white px-16 sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: "#2a2974" }} // Header background
    >
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={svrlogo}
            alt="Logo"
            className="h-16 w-auto m-2 bg-white rounded-md"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="font-semibold text-lg"
            style={{
              color: "#ffffff",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f6821f")} // Hover effect
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            Home
          </Link>
          <Link
            to="/Products"
            className="font-semibold text-lg"
            style={{
              color: "#ffffff",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f6821f")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            Products
          </Link>
          <Link
            to="/Contact"
            className="font-semibold text-lg"
            style={{
              color: "#ffffff",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f6821f")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            Contact
          </Link>
          <Link
            to="/Careers"
            className="font-semibold text-lg"
            style={{
              color: "#ffffff",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f6821f")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            Careers
          </Link>
          <Link
            to="/Events"
            className="font-semibold text-lg"
            style={{
              color: "#ffffff",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f6821f")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            Events
          </Link>
          <Link
            to="/Downloads"
            className="font-semibold text-lg"
            style={{
              color: "#ffffff",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f6821f")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            Downloads
          </Link>
          <Link
            to="/Support"
            className="font-semibold text-lg"
            style={{
              color: "#ffffff",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f6821f")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
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
            style={{ color: "#ffffff" }}
            onMouseEnter={(e) => (e.target.style.color = "#1784bc")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=R1ZYQdM3C8E&t=9s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            style={{ color: "#ffffff" }}
            onMouseEnter={(e) => (e.target.style.color = "#1784bc")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/_____svr.robotics/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            style={{ color: "#ffffff" }}
            onMouseEnter={(e) => (e.target.style.color = "#1784bc")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/svr-robotics/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            style={{ color: "#ffffff" }}
            onMouseEnter={(e) => (e.target.style.color = "#1784bc")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
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
            className="block text-center font-semibold text-lg text-white"
            style={{
              backgroundColor: "#0b6085",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1784bc")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#0b6085")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Products"
            className="block text-center font-semibold text-lg text-white"
            style={{
              backgroundColor: "#0b6085",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1784bc")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#0b6085")}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          {/* Add other links here following the same pattern */}
        </nav>
      )}
    </header>
  );
};

export default Header;
