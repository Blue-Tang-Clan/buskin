import React, { useState } from 'react';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
import FanDashBoard from './FanDashBoard.jsx';

export default function App() {
  const [logedIn, setLogedIn] = useState(false);
  const [showFanDashBoard, setShowFanDashBoard] = useState(true);

  return (
    <>
      {/* components */}
      <div>
        <NavBar setLogedIn={setLogedIn} />
      </div>
      <Home />
      {showFanDashBoard && <FanDashBoard />}
    </>
  );
}
