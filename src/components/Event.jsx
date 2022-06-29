import React, { useState, useContext, useEffect } from 'react';
import apiMasters from '../apiMasters.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TopContext } from './App.jsx';

export const ArtistContext = React.createContext();

export default function Event() {
  const { pageId } = useContext(TopContext);
  const [eventInfo, setEventInfo] = useState({});

  useEffect(() => {
    apiMasters.getEvent(pageId)
      .then((data) => {
        const info = data.data.rows[0];
        setEventInfo({
          art_id: info.art_id,
          city: info.city,
          date: info.date,
          description: info.description,
          display_name: info.display_name,
          end_time: info.end_time,
          latitude: info.latitude,
          longitude: info.longitude,
          name: info.name,
          pic: info.pic,
          start_time: info.start_time,
          state: info.state,
          street: info.street,
        });
      })
      .catch((err) => console.log('aww didnt get any data? boohoo', err));
  }, [pageId]);

  return (
    <div>
      <img src={eventInfo.pic} alt='Event' />
      <h1>{eventInfo.name}</h1>
      <p>{eventInfo.display_name}</p>
      <p>{`${eventInfo.street} ${eventInfo.city}, ${eventInfo.state}`}</p>
      <p>{`${eventInfo.date} ${eventInfo.start_time} ~ ${eventInfo.end_time}`}</p>
      <p>{eventInfo.description}</p>
    </div>
  );
}
