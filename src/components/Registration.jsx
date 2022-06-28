import React, { useState } from 'react';
import apiMasters from './../apiMasters.js';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const changeHandler = (e) => {
    if (e.target.id === 'username') {
      setUsername(e.target.value);
    } else if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    } else if (e.target.id === 'roles') {
      setUserType(e.target.value);
    }
  };

  const registerNewUser = (e) => {
    e.preventDefault();
    apiMasters.registerUser(username, password, email, userType)
      .then(() => {
        alert('registered successfully!');
      })
      .catch((err) => {
        console.log(err);
        alert('registered failed!');
      });
  };

  return (
    <div className='registration'>
      <h3>Registration</h3>
      <form onSubmit={registerNewUser}>
        <input type='text' required placeholder='username' value={username} id='username' onChange={changeHandler} />
        <br />
        <input type='email' required placeholder='email' value={email} id='email' onChange={changeHandler} />
        <br />
        <input type='password' required placeholder='password' value={password} id='password' onChange={changeHandler} />
        <br />
        <select name='roles' id='roles' required onChange={changeHandler} defaultValue=''>
          <option value='' disabled hidden>Select your role</option>
          <option value='artist'>artist</option>
          <option value='fan'>fan</option>
        </select>
        <br />
        <input type='submit' value='Register' />
      </form>
    </div>
  );
}
