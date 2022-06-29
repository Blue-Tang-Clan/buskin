import React, { useState } from 'react';
import apiMasters from '../apiMasters.js';

export default function EditProfile ({ artistId = 1 }) {
  const [displayName, setDisplayName ] = useState('');
  const [genre, setGenre ] = useState('');
  const [instrument, setInstrument ] = useState('');
  const [bio, setBio ] = useState('');
  const [pic, setPicture] = useState(null);
  // const [soundClip, setSoundClip ] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentOptions, setPaymentOptions] = useState('');

  function handleInput(e) {
    const name = e.target.name;
    if (e.target.files !== null) {
      const file = e.target.files[0] || null;
    }
    const value = e.target.value;
    if (name === 'displayname') {
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
    } else if (name === 'paymentoptions') {
      setPaymentOptions(value);
    }
  }
  function handleSubmit() {
    // take all the states and call some api
    // First upload image, get url for that image then post these
    let venmo, cashapp, paypal;
    if (paymentOptions === 'venmo') {
      venmo = paymentMethod;
    } else if (paymentOptions === 'paypal') {
      paypal = paymentMethod;
    } else if (paymentOptions === 'cashapp') {
      cashapp = paymentMethod;
    }
    apiMasters.editArtistProfile(artistId, {
      displayName,
      genre,
      instrument,
      bio,
      pic,
      cashapp,
      paypal,
      venmo,
    });
  }

  return (
    <div>
      <label>Edit profile</label>
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <input onChange={handleInput} placeholder="stage name" name="displayname" required /> <br />
        <input onChange={handleInput} placeholder="instrument you play" name="instrument" required /> <br />
        <input onChange={handleInput} placeholder="your picture" type="file" accept="image/*" name="picture" required /> <br />
        {/* <input onChange={handleInput} placeholder="your sound clip" name="soundclip" required /> <br /> */}
        <label for="cars">Choose a payment option:</label>
        <select name="paymentoptions" onChange={handleInput}>
          <option value="venmo">venmo</option>
          <option value="cashapp">cashapp</option>
          <option value="paypal">paypal</option>
        </select> <br />
        <input onChange={handleInput} placeholder="payment link" name="paymentmethod" required /> <br />
        <input onChange={handleInput} placeholder="your bio" name="bio" required /> <br />
        <input type="submit" />
      </form>
    </div>
  );
}