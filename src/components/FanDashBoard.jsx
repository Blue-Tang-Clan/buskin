import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { SavedEvents, FollowedArtists } from './DashBoardTag.jsx';
import apiMasters from '../apiMasters.js';
import { ArtistImgList, EventImgList } from './ListOfImg.jsx';
// import FlipCard from './FlipCard.jsx';

export default function FanDashBoard({ setPage, setPageId }) {
  const [artistsFollowed, setArtistsFollowed] = useState([]);
  const [eventsSaved, setEventsSaved] = useState([]);

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
    <Box sx={{ width: '90%', margin: '5%' }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <h2 style={{ color: '#373B53', fontWeight: '700' }}>DashBoard</h2>
        </Grid>
        <Grid item xs={5}>
          {FollowedArtists(artistsFollowed.length)}
        </Grid>
        {/* <Grid item xs={7}>
          {artistsFollowed.map((artist) => (
            <Card key={artist.artist_pic}>
              <ArtistMImg alt='artist pic' src={artist.artist_pic} onClick={showArtist} id={artist.artist_id} />
              <h5>{artist.artist_display_name}</h5>
            </Card>
          ))}
        </Grid> */}
        <ArtistImgList ArtistArr={artistsFollowed} xs={7} setPage={setPage} setPageId={setPageId} />
        <Grid item xs={5}>
          {SavedEvents(eventsSaved.length)}
        </Grid>
        {/* <Grid item xs={7}>
          {eventsSaved.map((event) => (
            <Card key={event.event_pic}>
              <EventsMImg alt='event pic' src={event.event_pic} onClick={showEvent} id={event.event_id} />
              <h5>{event.event_name}</h5>
              <h5>{`${event.event_date} ${event.event_start_time}`}</h5>
            </Card>
          ))}
        </Grid> */}
        <EventImgList EventArr={eventsSaved} xs={7} setPage={setPage} setPageId={setPageId} />
      </Grid>
    </Box>
  );
}
