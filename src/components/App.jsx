import React, { useState } from 'react';
import Registration from './Registration.jsx';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';

export default function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <>
      {/* components */}
      <div>
        <NavBar />
      </div>
      <Home />
      {!registered && <Registration setRegistered={setRegistered} />}
    </>
  );
}
