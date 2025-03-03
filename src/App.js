 src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="content">
        <h2>Welcome to the Hotel Management Dashboard!</h2>
      </div>
    </div>
  );
};

export default App;

src/components/Sidebar.js
