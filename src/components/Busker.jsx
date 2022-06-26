import React from 'react';
import axios from 'axios';

export default function Busker ({ busker, following }) {

  function handleFollow (e) {
    e.preventDefault();
    if (session.id) {
      axios.post(/*POST TO ADD ARTIST TO FOLLOW LIST*/)
        .then(
          following = !following;
        )
        .catch(err => {
          console.log(err);
        });
    } else {
      // REDIRECT TO LOGIN/SIGN UP
    }
  }

  return (
      <div>
        <img src={busker.image} />
        <span>{busker.name}</span>
        <button onClick={(e) => handleFollow(e)}>{following ? 'Unfollow' : 'Follow'}</button>
      </div>
   )
}