import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PaymentIcon from '@mui/icons-material/Payment';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import EventList from './EventList.jsx';
import Payments from './PaymentsQR.jsx';
import Qr from './Qr.jsx';
import { TagContainer, HomePageGenreTag, Audio } from './StyledComponents.js';
import { ArtistImg } from './StyledComponents.js';
import styled from 'styled-components';

import apiMasters from '../apiMasters.js';
import { TopContext } from './App.jsx';

const ArtistProfileContainer = styled.div`
  margin: 4rem 0 20rem 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ArtistTag = styled(HomePageGenreTag)`
  &:hover {
    cursor: default;
    background-color: #F7F8FB;
    color: black;
  }
`;

const ArtistDescription = styled.div`
  width: 32rem;
  padding: 40px;
  background-color: white;
  box-shadow: 4px 4px 5px 5px rgba(0,0,0, .08);
  border-radius: 10px;
  min-height: 100px;
  margin-bottom: 2rem;
`;

const LinkText = styled.div`
  left: 50%;
  text-align: center;
`;

export const ArtistContext = React.createContext();

export default function ArtistProfileQR() {
  const { artistId } = useParams();
  const [artist, setArtist] = useState({});
  const [events, setEvents] = useState([]);
  const [renderEvents, setRenderEvents] = useState(false);

  useEffect(() => {
    apiMasters.getArtistDetails(artistId)
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
  }, []);

  return (
    <div>
      <Link to='/'>
        <Avatar variant='square' sx={{ height: '100px', width: '300px', left: '40%' }} src={'https://i.ibb.co/Dw7T0Jb/Buskin-B2-copy.png'} />
      </Link>
      <LinkText>Click above to follow this and more artists!</LinkText>
      <ArtistContext.Provider value={{events, artist}}>
        <ArtistProfileContainer>
          <div style={{marginBottom: '4rem'}}>
            <div style={{ width: 'auto', display: 'flex', flexDirection: 'row', position: 'relative', alignItems: 'center'}}>
              <div style={{position: 'relative', marginRight: '50px'}}>
                <ArtistImg src={artist.pic} alt='busker' style={{ width: '350px', height: '350px', position: 'relative' }} />
              </div>
              <div style={{ marginLeft: '40px' }}>
                <div style={{ width: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem'}}>
                  <h1 style={{ margin: '0' }}>
                    {artist.name}
                  </h1>
                  <TagContainer style={{marginLeft: '20px'}}>
                    <ArtistTag style={{cursor: 'default'}} value={artist.genre}>{artist.genre}</ArtistTag>
                    <ArtistTag style={{cursor: 'default'}} value={artist.instrument}>{artist.instrument}</ArtistTag>
                  </TagContainer>
                </div>
                <ArtistDescription>
                  {artist.bio}
                </ArtistDescription>
                <div>Support your local artists.</div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px 0', width: '100%' }}>
                  <Payments />
                </div>
              </div>

            </div>
          </div>
        </ArtistProfileContainer>
      </ArtistContext.Provider>
    </div>
  );
}
