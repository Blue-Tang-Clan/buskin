import React, { useEffect, useState } from 'react';
import apiMasters from '../apiMasters.js';
import { EventImg, ArtistImg } from './StyledComponents.js';
import styled from 'styled-components';
import { SavedEvents, FollowedArtists } from './DashBoardTag.jsx';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import FlipCard from './FlipCard.jsx';

const ArtistMImg = styled(ArtistImg)`
  margin: 5px;
`;

const EventsMImg = styled(EventImg)`
  margin: 5px;
`;

const Card = styled.div`
  text-align: center;
  width: 20%;
  display: inline-block;
`;

export default function FanDashBoard({ setPage }) {
  const [artistsFollowed, setArtistsFollowed] = useState([]);
  const [eventsSaved, setEventsSaved] = useState([]);
  const showArtist = (e) => {
    setPage('artistProfile');
    // pass artist id
    console.log(e.target.id);
  };

  const showEvent = (e) => {
    setPage('event');
    // pass artist id
    console.log(e.target.id);
  };

  useEffect(() => {
    // needs to change fan_id dynamically
    apiMasters.getFanDashBoard(1)
      .then((response) => {
        console.log(response.data);
        setArtistsFollowed(response.data.artists);
        setEventsSaved(response.data.events);
      })
      .catch((err) => {
        console.log('getFanDashBoard err', err);
      });
  }, []);

  return (
    <Box sx={{ width: '80%', margin: '5%' }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <h2 style={{ color: '#373B53', fontWeight: '700' }}>DashBoard</h2>
        </Grid>
        <Grid item xs={5}>
          {FollowedArtists(artistsFollowed.length)}
        </Grid>
        <Grid item xs={7}>
          {artistsFollowed.map((artist) => (
            <Card key={artist.artist_pic}>
              <ArtistMImg alt='artist pic' src={artist.artist_pic} onClick={showArtist} id={artist.artist_id} />
              <h5>{artist.artist_display_name}</h5>
            </Card>
          ))}
        </Grid>
        <Grid item xs={5}>
          {SavedEvents(eventsSaved.length)}
        </Grid>
        <Grid item xs={7}>
          {eventsSaved.map((event) => (
            <Card key={event.event_pic}>
              <EventsMImg alt='event pic' src={event.event_pic} onClick={showEvent} id={event.event_id} />
              <h5>{event.event_name}</h5>
              <h5>{`${event.event_date} ${event.event_start_time}`}</h5>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
