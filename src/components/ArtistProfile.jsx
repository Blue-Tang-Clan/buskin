import React, { useState, useContext, useEffect } from 'react';
import EventList from './EventList.jsx';
import Payments from './Payments.jsx';
import apiMasters from '../apiMasters.js';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PaymentIcon from '@mui/icons-material/Payment';
import { TagContainer, HomePageGenreTag } from './StyledComponents.js';
import { TopContext } from './App.jsx';
import { ArtistImg } from './StyledComponents.js';
import styled from 'styled-components';

// const dummy = {
//   pic: 'https://cdn.shopify.com/s/files/1/0203/9334/files/Busking_Musicians_1024x1024.jpeg?v=1521795106',
//   display_name: 'Yau Yu',
//   bio: 'I play music really well!',
//   genre: 'Rock',
//   instrument: 'Accordian',
//   venmo: 'venmo',
//   cashapp: 'Cashapp',
//   paypal: 'paypal',
// };

const ArtistProfileContainer = styled.div`
  margin-top: 8rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const ArtistDescription = styled.div`
  width: 40rem;
  padding-left: 6px;
`;

const Schedule = styled.div`
  width: auto;
`;

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
    <ArtistContext.Provider value={{events, artist}}>
      <ArtistProfileContainer>
        <div>
          <div style={{ width: 'auto', display: 'flex', flexDirection: 'row' }}>
            <ArtistImg src={artist.pic} alt='busker' style={{ width: '300px', height: '300px', marginRight: '40px' }} />
            <div>
              <div style={{ width: 'auto', display: 'flex', flexDirection: 'row' }}>
                <h1>
                  {artist.name}
                </h1>
                <FavoriteBorderIcon style={{ width: '40px', height: '40px', marginLeft: '40px', marginTop: '35px' }} />
                <Payments />
              </div>
              <ArtistDescription>
                {artist.bio}
              </ArtistDescription>
            </div>

          </div>
          <TagContainer style={{ marginTop: '15px', marginLeft: '10px' }}>
            <HomePageGenreTag>
              {artist.genre}
            </HomePageGenreTag>
            <HomePageGenreTag>
              {artist.instrument}
            </HomePageGenreTag>
          </TagContainer>
        </div>
        <Schedule>
          <h3>Upcoming Events:</h3>
          {events
            ? <EventList setPage={setPage} setPageId={setPageId} />
            : undefined}
        </Schedule>
      </ArtistProfileContainer>
    </ArtistContext.Provider>
  );
}
