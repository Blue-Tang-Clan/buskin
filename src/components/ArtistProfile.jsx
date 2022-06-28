import React, { useState, useContext, useEffect } from 'react';
import EventList from './EventList.jsx';
import EventListItem from './EventListItem.jsx';
import apiMasters from '../apiMasters.js';

const dummy = {
  picture: 'https://cdn.shopify.com/s/files/1/0203/9334/files/Busking_Musicians_1024x1024.jpeg?v=1521795106',
  display_name: 'Yau Yu',
  bio: 'I play music really well!',
  genre: 'Rock',
  instrument: 'Accordian',
  venmo: 'venmo',
  cashapp: 'Cashapp',
  paypal: 'paypal',
};

// const dumEvents = [
//   {
//     name: 'Event 1',
//     street: '123 St',
//     city: 'Baltimore',
//     state: 'MD',
//     date: 'July 19, 2022',
//     start_time: '7:00pm',
//     end_time: '8:00pm',
//   },
//   {
//     name: 'Event 2',
//     street: '123 St',
//     city: 'Baltimore',
//     state: 'MD',
//     date: 'July 19, 2022',
//     start_time: '7:00pm',
//     end_time: '8:00pm',
//   },
//   {
//     name: 'Event 3',
//     street: '123 St',
//     city: 'Baltimore',
//     state: 'MD',
//     date: 'July 19, 2022',
//     start_time: '7:00pm',
//     end_time: '8:00pm',
//   },
// ];

export const EventsContext = React.createContext();

export default function ArtistProfile() {
  const [events, setEvents] = useState([]);
  const [renderEvents, setRenderEvents] = useState(false);

  useEffect(() => {
    apiMasters.getArtistDetails(1)
      .then((data) => {
        const info = data.data.rows[0].json_build_object;
        setEvents(info.events);
      })
      .catch((err) => console.log('aww didnt get any data? boohoo', err));
  }, []);

  function toggleRenderEvents() {
    if (renderEvents) {
      setRenderEvents(false);
    } else {
      setRenderEvents(true);
    }
  }

  return (
    <div>
      <img src={dummy.picture} alt='busker' style={{ height: '100px' }} />
      <h1>{dummy.name}</h1>
      <p>Heart icon goes here</p>
      <p>{dummy.bio}</p>
      <p>{dummy.genre}</p>
      <p>{dummy.instrument}</p>
      {/* music clip */}
      <button type='button' onClick={() => toggleRenderEvents()}>Upcoming Events</button>
      {renderEvents
        ? (
          <EventsContext.Provider value={events}>
            <EventList />
          </EventsContext.Provider>
        )
        : undefined}
      <p>{dummy.venmo}</p>
      <p>{dummy.cashapp}</p>
      <p>{dummy.paypal}</p>
    </div>
  );
}
