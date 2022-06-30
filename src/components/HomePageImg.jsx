import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import styled from 'styled-components';
import { EventImg, ArtistImg } from './StyledComponents.js';

const ArtistMImg = styled(ArtistImg)`
  margin: 5px;
`;

const EventsMImg = styled(EventImg)`
  margin: 5px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const Card = styled.div`
  text-align: center;
  width: 20%;
  display: inline-block;
`;

const StyleSpan = styled.span`
  font-size: 0.75em;
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

function EventImgList({ EventArr, xs, setPage, setPageId }) {
  const showEvent = (e) => {
    setPage('event');
    setPageId(e.target.id);
  };

  return (
    <Grid item xs={xs}>
      {EventArr.map((event) => (
        <Card key={event.pic}>
          <div className='flip-card-container' key={event.id}>
            <div className='flip-card'>
              <div className='flip-card-front'>
                {event.pic === null
                  ? <EventsMImg alt='event pic' src="https://images.sampletemplates.com/wp-content/uploads/2015/04/Event-Program.jpg" />
                  : <EventsMImg alt='event pic' src={event.pic} />}
              </div>
              <div className='flip-card-back' onClick={showEvent} id={event.id}>
                <h5>Event Name:<br/>{event.event_name}</h5>
                <StyleSpan>Time:<br/>{`${event.date} ${event.start_time}`}</StyleSpan>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </Grid>
  );
}

export { ArtistImgList, EventImgList };