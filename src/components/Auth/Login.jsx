import React, { useState } from 'react';
import apiMasters from './../apiMasters.js';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeHandler = (e) => {
    if (e.target.id === 'username') {
      setUsername(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  const login = (e) => {
    e.preventDefault();
    apiMasters.getUserInfo(username, password)
      .then(() => {
        alert('login success');
      })
      .catch((err) => { console.log(err); });
  };

  return (
    <div className='login'>
      <h3>Login</h3>
      <form onSubmit={login}>
        <input type='text' required placeholder='username' value={username} id='username' onChange={changeHandler} />
        <br />
        <input type='password' required placeholder='password' value={password} id='password' onChange={changeHandler} />
        <br />
        <input type='submit' value='Login' />
      </form>
    </div>
  );
}
