import React, { useEffect, useState } from 'react';
import { TotalFollowers } from './DashBoardTag.jsx';
import apiMasters from '../apiMasters.js';
import styled from 'styled-components';
import ViewMap from './ArtistViewMap.jsx';

const EventList = styled.div`
  width:30%;
  display: inline-block;
  text-align: center;
  display: grid;
  grid-template-areas:
    'time address';
  background-color: lightgray;
  margin: 10px;
  border: solid black;
  &:hover {
    cursor: pointer;
  }
`;

export default function ArtistDashBoard({userId, setPage, setPageId}) {
  const [fanCount, setFanCount] = useState(0);
  const [events, setEvents] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [artistId, setArtistId] = useState();

  const clickHandler = (e) => {
    console.log(e.target.id);
    setPage('event');
    setPageId(e.target.id);
  }

  useEffect(() => {
    apiMasters.getArtistDetails(userId)
      .then((response) => {
        const artistInfo = response.data.rows[0].json_build_object;
        console.log(artistInfo);
        setFanCount(artistInfo.fan_num);
        setEvents(artistInfo.events);
        setArtistName(artistInfo.name);
        setArtistId(artistInfo.id);
      })
      .catch((err) => {
        console.log('getArtistDashBoard err', err);
      });
  }, [userId]);

  return (
    <>
      <h2 style={{ color: '#373B53', fontWeight: '700' }}>DashBoard</h2>
      {TotalFollowers(fanCount)}
      {events && events.map((event) => (
        <EventList id={event.id} onClick={clickHandler}>
          <h5>{`${event.date}`}</h5>
          <h5>{`${event.street}, ${event.city}, ${event.state}`}</h5>
        </EventList>
      ))}
      <ViewMap ArtistName={artistName} ArtistId={artistId} />
    </>
  );
}
