import React, { useState } from 'react';

export default function EditProfile ( { type } ) {
  const [userName, setUserName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'name') {
      setUserName(value);
    } else if (name === 'street') {
      setStreet(value);
    } else if (name === 'city') {
      setCity(value);
    } else if (name === 'state') {
      setState(value);
    }
  }
  function handleSubmit() {
    // take all the states and call some api
  }

  return (
    <div>
      <label>Edit profile</label>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} placeholder="name" type="text" name="fanname" /> <br />
        <label>address</label> <br />
        <input onChange={handleInput} placeholder="street" name="street" required /> <br />
        <input onChange={handleInput} placeholder="city" name="city" required /> <br />
        <input onChange={handleInput} placeholder="state" name="state" required /> <br />
        <input type="submit" />
      </form>
    </div>
  );
}
