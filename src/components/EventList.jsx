import React, { useState, useEffect, useContext } from 'react';
import { ArtistContext } from './ArtistProfile.jsx';
import EventListItem from './EventListItem.jsx';
import styled from 'styled-components';

const EventContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
`;

export const EventContext = React.createContext();

export default function EventList({ setPage, setPageId }) {
  const { events } = useContext(ArtistContext);

  return (
    <EventContainer>
      {events.map((event) => (
        <EventContext.Provider key={event.id} value={event}>
          <EventListItem key={event.name} setPage={setPage} setPageId={setPageId} />
        </EventContext.Provider>
      ))}
    </EventContainer>
  );
}
