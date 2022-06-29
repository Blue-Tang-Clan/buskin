import React, { useState, useEffect, useContext } from 'react';
import { ArtistContext } from './ArtistProfile.jsx';
import EventListItem from './EventListItem.jsx';

export const EventContext = React.createContext();

export default function EventList({ setPage, setPageId }) {
  const { events } = useContext(ArtistContext);

  return (
    <div>
      {events.map((event) => (
        <EventContext.Provider key={event.id} value={event}>
          <EventListItem key={event.name} setPage={setPage} setPageId={setPageId} />
        </EventContext.Provider>
      ))}
    </div>
  );
}
