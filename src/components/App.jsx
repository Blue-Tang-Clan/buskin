import React, { useState } from 'react';
import Registration from './Registration.jsx';

export default function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <>
      {/* components */}
      {!registered && <Registration setRegistered={setRegistered} />}
    </>
  );
}
