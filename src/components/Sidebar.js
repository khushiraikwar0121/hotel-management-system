// src/components/Sidebar.js
//import React from "react";
//import "./Sidebar.css";

//const Sidebar = () => {
  //return (
    //<div className="sidebar">
      //<h2>Dashboard</h2>
      //<ul>
        //<li><a href="/">Home</a></li>
        //<li><a href="/bookings">Bookings</a></li>
        //<li><a href="/rooms">Rooms</a></li>
        //<li><a href="/customers">Customers</a></li>
      //</ul>
    //</div>
  //);
//};

//export default Sidebar;
// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>Home</li>
        <li>Bookings</li>
        <li>Rooms</li>
        <li>Customers</li>
      </ul>
    </div>
  );
};

export default Sidebar;
