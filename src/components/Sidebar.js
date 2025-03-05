import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Bookings</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/customers">Customers</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
