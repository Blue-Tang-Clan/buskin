import React, { useState } from 'react';

export default function EditProfile ( { type } ) {
  const [artistName, setArtistName] = useState('');
  const [displayName, setDisplayName ] = useState('');
  const [genre, setGenre ] = useState('');
  const [instrument, setInstrument ] = useState('');
  const [bio, setBio ] = useState('');
  const [picture, setPicture] = useState('');
  const [soundClip, setSoundClip ] = useState('');
  const [paymentMethod, setPaymentMethod ] = useState('');

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'artistname') {
      setArtistName(value);
      console.log('Picture: ', picture)
    } else if (name === 'displayname') {
      setDisplayName(value);
    } else if (name === 'genre') {
      setGenre(value);
    } else if (name === 'instrument') {
      setInstrument(value);
    } else if (name === 'bio') {
      setBio(value);
    } else if (name === 'picture') {
      setPicture(value);
    } else if (name === 'soundclip') {
      setSoundClip(value);
    } else if (name === 'paymentmethod') {
      setPaymentMethod(value);
    }
  }
  function handleSubmit() {
    // take all the states and call some api
  }

  return (
    <div>
      <label>Edit profile</label>
      <form onSubmit={handleSubmit}>
        <label>address</label> <br />
        <input onChange={handleInput} placeholder="name" type="text" name="artistname" /> <br />
        <input onChange={handleInput} placeholder="stage name" name="displayname" required /> <br />
        <input onChange={handleInput} placeholder="instrument you play" name="instrument" required /> <br />
        <input onChange={handleInput} placeholder="your picture" type="file" accept="image/*" name="picture" required /> <br />
        <input onChange={handleInput} placeholder="your sound clip" name="soundclip" required /> <br />
        <input onChange={handleInput} placeholder="tipping link(paypay, venmo)" name="paymentmethod" required /> <br />
        <input onChange={handleInput} placeholder="your bio" name="bio" required /> <br />
        <input type="submit" />
      </form>
    </div>
  );
}
