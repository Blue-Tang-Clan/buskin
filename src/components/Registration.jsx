import React from 'react';

export default function Registration() {
  return (
    <div className='registration'>
      <h3>Registration</h3>
      <form>
        <label htmlFor='username'>
          Username:
          {' '}
          <input type='text' placeholder='username' />
        </label>
        <br />
        <br />
        <label htmlFor='email'>
          Email:
          {' '}
          <input type='email' placeholder='email' />
        </label>
        <br />
        <br />
        <label htmlFor='password'>
          Password:
          {' '}
          <input type='password' placeholder='password' />
        </label>
        <br />
        <br />
        <label htmlFor='roles'>
          Choose a role:
          {' '}
          <select name='roles' id='roles'>
            <option value='artist'>artist</option>
            <option value='fan'>fan</option>
          </select>
        </label>
      </form>
    </div>
  );
}
