import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewMap from './ArtistViewMap.jsx';
import { TotalFollowers } from './DashBoardTag.jsx';
import apiMasters from '../apiMasters.js';

const FanDashBoard = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 15% 30% 55%;

`;

const DashBoardText = styled.h2`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  color: #373B53;
  font-weight: 700;
`;

const DashBoardCard = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const EventList = styled.div`
  height: 500px;
  overflow: scroll;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
`;

const EventDiv = styled.div`
  width:80%;
  display: inline-block;
  text-align: center;
  display: grid;
  grid-template-columns: 30% 60% 10%;
  margin: 10px;
  border-bottom: solid 	#D8D8D8 2px;
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
`;

const AddressDiv = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  margin: auto;
`;

const MapDiv = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  margin: auto;
  text-align: center;
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
`;

const AddressText = styled.p`
    color: #8F8F8F;
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
        setFanCount(artistInfo.fan_num);
        setEvents(artistInfo.events);
        setArtistName(artistInfo.name);
        setArtistId(artistInfo.id);
      })
      .catch((err) => {
        console.log('getArtistDashBoard err', err);
      });
  };

  const deleteEvent = (e) => {
    console.log(e.target);
    console.log('userId', userId);
    console.log('eventId', e.target.id);
    if (e.target.id) {
      console.log('here');
      apiMasters.artistDeleteEvent(userId, e.target.id)
        .then(() => {
          getArtistDashBoard(userId);
        })
        .catch(err => {
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
        {events && events.map((event) => (
          <EventDiv id={event.id} onClick={clickHandler}>
            <DateDiv>
              <h4>{`${event.date}`}</h4>
            </DateDiv>
            <AddressDiv>
              <EventText>{event.name}</EventText>
              <AddressText>{`${event.city}, ${event.state}`}</AddressText>
            </AddressDiv>
            <TrashBoxDiv onClick={(e) => e.stopPropagation()}>
              <div onClick={deleteEvent} id={event.id} >
                <DeleteIcon sx={{ color: ' #259998' }} />
              </div>
            </TrashBoxDiv>

          </EventDiv>
        ))}
      </EventList>
      <MapDiv>
        <ViewMap ArtistName={artistName} ArtistId={artistId} getArtistDashBoard={getArtistDashBoard} />
      </MapDiv>
    </FanDashBoard>
  );
}
