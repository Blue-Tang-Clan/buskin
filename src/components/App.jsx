import React, { useState } from 'react';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';

export default function App() {
  const [logedIn, setLogedIn] = useState(false);

  return (
    <>
      {/* components */}
      <div>
        <NavBar setLogedIn={setLogedIn} />
      </div>
      <Home />
    </>
  );
}
