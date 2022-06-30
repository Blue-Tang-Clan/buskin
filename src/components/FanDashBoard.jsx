import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { SavedEvents, FollowedArtists } from './DashBoardTag.jsx';
import apiMasters from '../apiMasters.js';
import { EventImg, ArtistImg } from './StyledComponents.js';
// import FlipCard from './FlipCard.jsx';

const ArtistMImg = styled(ArtistImg)`
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const EventsMImg = styled(EventImg)`
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Card = styled.div`
  text-align: center;
  width: 25%;
  display: inline-block;
`;

export default function FanDashBoard({ setPage, setPageId, userId }) {
  const [artistsFollowed, setArtistsFollowed] = useState([]);
  const [eventsSaved, setEventsSaved] = useState([]);

  const showArtist = (e) => {
    setPage('artistProfile');
    setPageId(e.target.id);
  };

  const showEvent = (e) => {
    setPage('event');
    setPageId(e.target.id);
  };

  useEffect(() => {
    apiMasters.getFanDashBoard(userId)
      .then((response) => {
        setArtistsFollowed(response.data.artists);
        setEventsSaved(response.data.events);
      })
      .catch((err) => {
        console.log('getFanDashBoard err', err);
      });
  }, [userId]);

  return (
    <Box sx={{ width: '80%', margin: '5%' }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <h2 style={{ color: '#373B53', fontWeight: '700' }}>DashBoard</h2>
        </Grid>
        <Grid item xs={5}>
          {artistsFollowed ? FollowedArtists(artistsFollowed.length) : SavedEvents(0)}
        </Grid>
        <Grid item xs={7}>
          {artistsFollowed && artistsFollowed.map((artist) => (
            <Card key={artist.artist_pic}>
              <ArtistMImg alt='artist pic' src={artist.artist_pic} onClick={showArtist} id={artist.artist_id} />
              <h5>{artist.artist_display_name}</h5>
            </Card>
          ))}
        </Grid>
        <Grid item xs={5}>
          {eventsSaved ? SavedEvents(eventsSaved.length) : SavedEvents(0)}
        </Grid>
        <Grid item xs={7}>
          {eventsSaved && eventsSaved.map((event) => (
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
