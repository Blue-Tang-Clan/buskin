import React, { useState } from 'react';
// import Registration from './Registration.jsx';
import SignUp from './registration2.jsx';

export default function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <>
      {/* components */}
      {!registered && <SignUp setRegistered={setRegistered} />}
    </>
  );
}
