import React, { useState, useContext } from 'react';
import { EventContext } from './EventList.jsx';
import Divider from '@mui/material/Divider';

export default function EventListItem() {
  const event = useContext(EventContext);
  return (
    <div>
      <p>{event.name}</p>
      <p>{`${event.street} ${event.city}, ${event.state}`}</p>
      <p>{`${event.date} ${event.start_time} ~ ${event.end_time}`}</p>
      <Divider />
    </div>
  );
}
