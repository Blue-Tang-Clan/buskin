import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import styled from 'styled-components';
import { EventImg, ArtistImg } from './StyledComponents.js';

const CardImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

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

function EventImgList({ EventArr, xs, setPage, setPageId }) {
  const [imgSrc, setImgSrc] = useState("Invalid Image Source");
  const showEvent = (e) => {
    setPage('event');
    setPageId(e.target.id);
  };

  return (
    <Grid item xs={xs}>
      {EventArr.map((event) => (
        <div className='flip-card-container' key={event.id}>
          <div className='flip-card'>
            <div className='flip-card-front'>
              {event.pic === null
                ? <CardImg alt='event pic' src="https://images.sampletemplates.com/wp-content/uploads/2015/04/Event-Program.jpg" onClick={showEvent} id={event.id} />
                : <CardImg alt='event pic' src={event.pic} onClick={showEvent} id={event.id} />}
            </div>
            <div className='flip-card-back'>
              <h5>Event Name:{event.event_name}</h5>
              <span>Event Time:{`${event.date} ${event.start_time}`}</span>
            </div>
          </div>
        </div>
      ))}
    </Grid>
  );
}

export { ArtistImgList, EventImgList };
