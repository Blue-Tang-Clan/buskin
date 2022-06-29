import React, { useState, useContext, useEffect } from 'react';
import EventList from './EventList.jsx';
import Payments from './Payments.jsx';
import apiMasters from '../apiMasters.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TopContext } from './App.jsx';
const dummy = {
  pic: 'https://cdn.shopify.com/s/files/1/0203/9334/files/Busking_Musicians_1024x1024.jpeg?v=1521795106',
  display_name: 'Yau Yu',
  bio: 'I play music really well!',
  genre: 'Rock',
  instrument: 'Accordian',
  venmo: 'venmo',
  cashapp: 'Cashapp',
  paypal: 'paypal',
};

export const ArtistContext = React.createContext();

export default function ArtistProfile({ setPage, setPageId }) {
  const { pageId } = useContext(TopContext);
  const [artist, setArtist] = useState({});
  const [events, setEvents] = useState([]);
  const [renderEvents, setRenderEvents] = useState(false);

  useEffect(() => {
    apiMasters.getArtistDetails(pageId)
      .then((data) => {
        const info = data.data.rows[0].json_build_object;
        setArtist({
          id: info.id,
          name: info.name,
          bio: info.bio,
          genre: info.genre,
          instrument: info.instrument,
          pic: info.pic,
          venmo: info.venmo,
          paypal: info.paypal,
          cashapp: info.cashapp,
        });
        setEvents(info.events);
      })
      .catch((err) => console.log('aww didnt get any data? boohoo', err));
  }, [pageId]);

  function toggleRenderEvents() {
    if (renderEvents) {
      setRenderEvents(false);
    } else {
      setRenderEvents(true);
    }
  }

  return (
    <div>
      <ArtistContext.Provider value={{events, artist}}>
        <div>
        <img src={artist.pic} alt='busker' style={{ height: '100px' }} />
        <h1>{artist.name}</h1>
        <FavoriteIcon />
        <p>
          About me:
          <br />
          {artist.bio}
        </p>
        <p>
          Genre:
          <br />
          {artist.genre}
        </p>
        <p>
          Instrument:
          <br />
          {artist.instrument}
        </p>
        {/* music clip */}
        <button type='button' onClick={() => toggleRenderEvents()}>Upcoming Events</button>
        {renderEvents
          ? (
            <EventList setPage={setPage} setPageId={setPageId} />
          )
          : undefined}
        <Payments />
          </div>
      </ArtistContext.Provider>
    </div>
  );
}
