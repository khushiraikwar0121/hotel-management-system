// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> 
      <Link to="/booking">Booking</Link> 
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
