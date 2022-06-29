import Grid from '@mui/material/Grid';
import React from 'react';
import styled from 'styled-components';
import { EventImg, ArtistImg } from './StyledComponents.js';

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

function ArtistImgList({ArtistArr, xs, setPage, setPageId}) {
  const showArtist = (e) => {
    setPage('artistProfile');
    setPageId(e.target.id);
  };

  return (
    <Grid item xs={xs}>
      {ArtistArr.map((artist) => (
        <Card key={artist.pic}>
          <ArtistMImg alt='artist pic' src={artist.pic} onClick={showArtist} id={artist.id} />
          <h5>{artist.artist_name}</h5>
        </Card>
      ))}
    </Grid>
  );
}

function EventImgList({EventArr, xs, setPage, setPageId}) {
  const showEvent = (e) => {
    setPage('event');
    setPageId(e.target.id);
  };

  return (
    <Grid item xs={xs}>
      {EventArr.map((event) => (
        <Card key={event.event_pic}>
          <EventsMImg alt='event pic' src={event.event_pic} onClick={showEvent} id={event.event_id} />
          <h5>{event.event_name}</h5>
          <h5>{`${event.event_date} ${event.event_start_time}`}</h5>
        </Card>
      ))}
    </Grid>
  );
}

export { ArtistImgList, EventImgList };
