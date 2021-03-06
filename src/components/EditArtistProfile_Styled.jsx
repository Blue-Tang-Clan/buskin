import React, { useState } from 'react';
import Qr from './Qr.jsx';
import apiMasters from '../apiMasters.js';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function EditProfile( { artistId, artistName, setPage } ) {
  artistName = 'no name';
  const [displayName, setDisplayName] = useState('');
  const [genre, setGenre] = useState('');
  const [instrument, setInstrument] = useState('');
  const [bio, setBio] = useState('');
  const [image, setPicture] = useState(null);
  // const [soundClip, setSoundClip ] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentOptions, setPaymentOptions] = useState('');

  function handleInput(e) {
    const name = e.target.name;
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
      setPicture(e.target.files[0]);
    } else if (name === 'soundclip') {
      setSoundClip(value);
    } else if (name === 'paymentmethod') {
      setPaymentMethod(value);
    } else if (name === 'paymentoptions') {
      setPaymentOptions(value);
    }
  }
  function handleSubmit(e) {
    // take all the states and call some api
    // First upload image, get url for that image then post these
    e.preventDefault();
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
      image,
      cashapp,
      paypal,
      venmo,
    }).then((photoUrl) => {
      setPage('artistDashboard');
      // set page id to something, then set image to the url
    });
  }
  console.log('easdfasdf')
  return (
    <div>
      <label>Edit profile</label>
      <Box sx={{ display: 'grid', gridTemplateColumns: '(2, 2)' }}>
      <Box component='form' Validate onSubmit={handleSubmit} sx={{ mt: 3, }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id='displayname'
              label='displayname'
              name='displayname'
              autoComplete='displayname'
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id='instrument'
              label='instrument'
              name='instrument'
              autoComplete='instrument'
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              onChange={handleInput}
              required
              accept="image/*"
              id="picture"
              multiple
              type="file"
              name="picture"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id='genre'
              label='genre'
              name='genre'
              autoComplete='genre'
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} style={{paddingBottom: '20px'}}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Choose a payment option*</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='paymentoptions'
                value={paymentOptions}
                label='paymentoptions'
                required
                name="paymentoptions"
                onChange={handleInput}
              >
                <MenuItem value='venmo'>venmo</MenuItem>
                <MenuItem value='cashapp'>cashapp</MenuItem>
                <MenuItem value='paypal'>paypal</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{paddingBottom: '20px'}}>
          <TextField
            required
            fullWidth
            id='paymentmethod'
            label='paymentmethod'
            name='paymentmethod'
            autoComplete='paymentmethod'
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} style={{paddingBottom: '20px'}}>
          <TextField
            required
            fullWidth
            id='bio'
            label='bio'
            name='bio'
            autoComplete='bio'
            onChange={handleInput}
          />
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
      <Box>
        <Qr artistId={artistId} artistName={artistName} />
      </Box>
      </Box>
    </div>
  );
}