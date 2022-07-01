import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { SavedEvents, FollowedArtists, Tag, Container, SavedEventsTag, Icon, TotalFollowersTag, Text, Number, FollowedArtistsTag } from './DashBoardTag.jsx';
import apiMasters from '../apiMasters.js';
import { EventImg, ArtistImg } from './StyledComponents.js';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DateRangeIcon from '@mui/icons-material/DateRange';

const FollowedArtistsModified = ({number}) => {
  return (
    <Tag>
      <Container style={{position: 'absolute', top:'28%'}}>
        <FollowedArtistsTag>
          <Icon>
            <FavoriteBorderIcon sx={{ color: "#FFB800" }} />
          </Icon>
        </FollowedArtistsTag>
        <div>
          <Number>
            {number}
          </Number>
          <Text>
            Total followed artists
          </Text>
        </div>
      </Container>
    </Tag>
  );
}

const SavedEventsModified = ({number}) => {
  return (
  <Tag>
      <Container style={{position: 'absolute', top:'48%'}}>
        <SavedEventsTag>
          <Icon>
            <DateRangeIcon sx={{ color: "#2ED297" }} />
          </Icon>
        </SavedEventsTag>
        <div>
          <Number>
            {number}
          </Number>
          <Text>
            Saved events
          </Text>
        </div>
      </Container>
    </Tag>
  );
}


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
  font-size: 1em;
  pointer-events: none;
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
          {artistsFollowed
            ? <FollowedArtistsModified number={artistsFollowed.length} />
            : <FollowedArtistsModified number={0} />}
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
          {eventsSaved
            ? <SavedEventsModified number={eventsSaved.length} />
            : <SavedEventsModified number={0} />}
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
                    <StyleSpan style={{ pointerEvents: 'none' }}>
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
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
