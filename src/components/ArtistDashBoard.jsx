import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ViewMap from './ArtistViewMap.jsx';
import { TotalFollowers } from './DashBoardTag.jsx';
import apiMasters from '../apiMasters.js';
import { FaTrashAlt } from "react-icons/fa";

const FanDashBoard = styled.div`
  display: grid;
  grid-template-columns: 50% 5% 45%;
  grid-template-rows: 7.5% 7.5% 30% 55%;

`;

const DashBoardText = styled.h3`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  color: #373B53;
  font-weight: 700;
`;

const DashBoardCard = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
`;

const EventList = styled.div`
  height: 500px;
  overflow: scroll;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
`;

const EventDiv = styled.div`
  width:80%;
  display: inline-block;
  text-align: center;
  display: grid;
  grid-template-columns: 30% 60% 10%;
  margin: 10px;
  border-bottom: solid #D8D8D8 2px;
  &:hover {
    cursor: pointer;
  }
`;

const DateDiv = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  color: #259998;
  fontWeight: bold;
  margin: auto;
  pointer-events: none;
`;

const DateText = styled.h4`
  margin: 5px;
  color: #259998;
`;

const AddressDiv = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  margin: auto;
  pointer-events: none;
`;

const MapDiv = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  margin: auto;
`;

const MapText = styled.h4`
  grid-column-start: 3;
  grid-row-start: 2;
`;

const TrashBoxDiv = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  text-align: center;
  margin: auto;
`;

const EventText = styled.h4`
    font-weight: bold;
    color: #2D2D2D;
    margin: 5px;
    pointer-events: none;
`;

const AddressText = styled.p`
    color: #8F8F8F;
    pointer-events: none;
`;

export default function ArtistDashBoard({userId, setPage, setPageId}) {
  const [fanCount, setFanCount] = useState(0);
  const [events, setEvents] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [artistId, setArtistId] = useState();

  const clickHandler = (e) => {
    setPage('event');
    setPageId(e.target.id);
  };

  const getArtistDashBoard = (id) => {
    apiMasters.getArtistDetails(id)
      .then((response) => {
        const artistInfo = response.data.rows[0].json_build_object;
        console.log(artistInfo);
        if (artistInfo.followers) {
          setFanCount(artistInfo.followers.length);
        }
        setEvents(artistInfo.events);
        setArtistName(artistInfo.name);
        setArtistId(artistInfo.id);
      })
      .catch((err) => {
        console.log('getArtistDashBoard err', err);
      });
  };

  const deleteEvent = (e) => {
    e.stopPropagation();
    console.log(e);
    console.log('eventId', e.target.id);
    if (e.target.id) {
      apiMasters.artistDeleteEvent(userId, e.target.id)
        .then(() => {
          getArtistDashBoard(userId);
        })
        .catch((err) => {
          console.log('getArtistDashboard err again', err);
        });
    }
  };

  useEffect(() => {
    getArtistDashBoard(userId);
  }, [userId]);

  return (
    <FanDashBoard>
      <DashBoardText>DashBoard</DashBoardText>
      <DashBoardCard>
        {TotalFollowers(fanCount)}
      </DashBoardCard>
      <EventList>
        <h4>Upcoming Events</h4>
        {events && events.map((event) => (
          <EventDiv id={event.id} onClick={clickHandler}>
            <DateDiv>
              <DateText>{`${event.date}`}</DateText>
              <p style={{ color: '#259998' }}>{`${event.start_time}`}</p>
            </DateDiv>
            <AddressDiv>
              <EventText>{event.name}</EventText>
              <AddressText>{`${event.city}, ${event.state}`}</AddressText>
            </AddressDiv>
            <TrashBoxDiv onClick={deleteEvent} id={event.id}>
              <FaTrashAlt style={{ color: '#259998', pointerEvents: 'none' }} />
            </TrashBoxDiv>
          </EventDiv>
        ))}
      </EventList>
      <MapText>Add Your Events Here</MapText>
      <MapDiv>
        <ViewMap ArtistName={artistName} ArtistId={artistId} getArtistDashBoard={getArtistDashBoard} events={events} />
      </MapDiv>
    </FanDashBoard>
  );
}
