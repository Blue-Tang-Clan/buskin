import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { SavedEvents, FollowedArtists } from './DashBoardTag.jsx';
import apiMasters from '../apiMasters.js';
import { EventImg, ArtistImg } from './StyledComponents.js';

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

const StyleSpan = styled.span`
  font-size: 0.75em;
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
    <Box sx={{ width: '100%', margin: '5%' }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <h2 style={{ color: '#373B53', fontWeight: '700' }}>DashBoard</h2>
        </Grid>
        <Grid item xs={5}>
          {artistsFollowed ? FollowedArtists(artistsFollowed.length) : FollowedArtists(0)}
        </Grid>
        <Grid item xs={7}>
          {artistsFollowed && artistsFollowed.map((artist) => (
            <Card key={artist.artist_pic}>
              <ArtistMImg alt='artist pic' src={artist.artist_pic ? artist.artist_pic : 'https://bandzoogle.com/files/3287/bzblog-26-ways-musicians-make-money-main.jpg'} onClick={showArtist} id={artist.artist_id} />
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
              <div className='flip-card-container' key={event.id}>
                <div className='flip-card'>
                  <div className='flip-card-front'>
                    <EventsMImg alt='event pic' src={event.event_pic ? event.event_pic : 'https://cdn.choosechicago.com/uploads/2019/05/Belmont_Sheffield_Music_Fest_c698582a-9aec-4738-807f-5f7061c698f1-1024x612.png'} />
                  </div>
                  <div className='flip-card-back' onClick={showEvent} id={event.event_id}>
                    <h5>Event Name:<br/>{event.event_name}</h5>
                    <StyleSpan>Time:<br/>{`${event.date} ${event.start_time}`}</StyleSpan>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
