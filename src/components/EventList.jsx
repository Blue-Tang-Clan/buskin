import React, { useState, useEffect, useContext } from 'react';
import { EventsContext } from './ArtistProfile.jsx';
import EventListItem from './EventListItem.jsx';

export const EventContext = React.createContext();

export default function EventList() {
  const events = useContext(EventsContext);

  return (
    <div>
      {events.map((event) => (
        <EventContext.Provider value={event}>
          <EventListItem key={event.name} />
        </EventContext.Provider>
      ))}
    </div>
  );
}
