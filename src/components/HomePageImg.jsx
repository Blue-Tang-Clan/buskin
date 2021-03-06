import Grid from '@mui/material/Grid';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  font-size: 1em;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;


function ArtistImgList({
  ArtistArr,
  xs,
  setPage,
  setPageId,
}) {
  const showArtist = (e) => {
    setPage('artistProfile');
    setPageId(e.target.id);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <Grid item xs={xs}>
      {ArtistArr.map((artist) => (
        <Card key={artist.pic}>
          {artist.pic === null
            ? <ArtistMImg alt='artist pic' src={'https://images.unsplash.com/photo-1547662727-a13d37c1a1e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjc3fHxtdXNpY2lhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} onClick={showArtist} id={artist.id} />
            : <ArtistMImg alt='artist pic' src={artist.pic} onClick={(e) => showArtist(e)} id={artist.id} />}
          <h5>{artist.artist_name}</h5>
        </Card>
      ))}
    </Grid>
  );
}

function EventImgList({
  EventArr,
  xs,
  setPage,
  setPageId,
}) {
  const showEvent = (id) => {
    setPage('event');
    setPageId(id);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  console.log(EventArr);
  return (
    <Container>
      {EventArr.map((event) => (
        <Card key={event.id} pic={event.pic}>
          <div className='flip-card-container' key={event.id}>
            <div className='flip-card'>
              <div className='flip-card-front'>
                {event.pic === null
                  ? <EventImg alt='event pic' src='https://images.sampletemplates.com/wp-content/uploads/2015/04/Event-Program.jpg' />
                  : <EventImg alt='event pic' src={event.pic} />}
              </div>
              <div className='flip-card-back' onClick={() => showEvent(event.id)} id={event.id}>
                <div>
                  <StyleSpan>
                    <br />
                    {event.event_name}
                    <br />
                    <br />
                    {`${event.date}`}
                    <br />
                    {`${event.start_time}`}
                  </StyleSpan>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </Container>
  );
}

ArtistImgList.propTypes = {
  ArtistArr: PropTypes.arrayOf.isRequired,
  xs: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setPageId: PropTypes.func.isRequired,
};

EventImgList.propTypes = {
  EventArr: PropTypes.arrayOf.isRequired,
  xs: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setPageId: PropTypes.func.isRequired,
};

export { ArtistImgList, EventImgList };
