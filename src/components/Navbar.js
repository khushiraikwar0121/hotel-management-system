// src/components/Navbar.js
import React from "react";
import "./Navbar.css"; // Styling ke liye (baad me banayenge)

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Hotel Management System</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
