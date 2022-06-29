import React, { useEffect, useState } from 'react';
import { TotalFollowers } from './DashBoardTag.jsx';
import apiMasters from '../apiMasters.js';
import ViewMap from './ArtistViewMap.jsx';

export default function ArtistDashBoard({userId}) {
  const [fanCount, setFanCount] = useState(0);
  const [events, setEvents] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [artistId, setArtistId] = useState();

  useEffect(() => {
    apiMasters.getArtistDetails(userId)
      .then((response) => {
        const artistInfo = response.data.rows[0].json_build_object;
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
      {events.map((event) => (
        <div key={event.id}>
          <h5>{`${event.date} ${event.start_time}`}</h5>
          <h5>{`${event.street}, ${event.city}, ${event.state}`}</h5>
        </div>
      ))}
      <ViewMap ArtistName={artistName} ArtistId={artistId} />
    </>
  );
}
