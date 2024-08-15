import React from "react";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Dynamic Dashboard</h1>
      <Dashboard />
    </div>
  );
}

export default App;
