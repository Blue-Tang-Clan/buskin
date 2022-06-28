import React, { useState, useEffect, useContext } from 'react';
import apiMasters from '../apiMasters.js';

export const EventContext = React.createContext();

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    apiMasters.getArtistDetails(1)
      .then((data) => {
        const info = data.data.rows.json_build_object;
        const dataEvents = info.events;

        setEvents(dataEvents);
        console.log('what the events', events);
      })
      .catch((err) => console.log('aww didnt get any data? boohoo', err));
  }, []);

  return (
    <div>
      hi
    </div>
  );
}
