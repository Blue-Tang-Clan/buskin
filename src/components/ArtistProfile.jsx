import React, { useState, useContext, useEffect } from 'react';
import EventList from './EventList.jsx';
import Payments from './Payments.jsx';
import apiMasters from '../apiMasters.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PaymentIcon from '@mui/icons-material/Payment';
import { TagContainer, HomePageGenreTag, Audio } from './StyledComponents.js';
import Divider from '@mui/material/Divider';
import { TopContext } from './App.jsx';
import { ArtistImg } from './StyledComponents.js';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

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

const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  marginTop: 80px;
  width: auto;
`;

export const ArtistContext = React.createContext();

export default function ArtistProfile({ setPage, setPageId }) {
  const { pageId, userType, setLogin, userId } = useContext(TopContext);
  const [artist, setArtist] = useState({});
  const [events, setEvents] = useState([]);
  const [follow, setFollow] = useState(false);
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

  function handleFollow(action, fanId, artistId) {
    if (userType === 'anonymous') {
      setLogin(true);
    } else if (action === 'follow') {
      apiMasters.followArtist(fanId, artistId)
        .then(() => setFollow(true))
        .catch((err) => {
          console.log(err);
        });
    } else {
      apiMasters.unfollowArtist(fanId, artistId)
        .then(() => setFollow(false))
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <ArtistContext.Provider value={{events, artist}}>
      <ArtistProfileContainer>
        <div style={{marginBottom: '4rem'}}>
          <div style={{ width: 'auto', display: 'flex', flexDirection: 'row', position: 'relative', alignItems: 'center'}}>
            <div style={{position: 'relative', marginRight: '50px'}}>
              <ArtistImg src={artist.pic} alt='busker' style={{ width: '350px', height: '350px', position: 'relative' }} />
              {userType === 'fan'
                ? (
                  <Tooltip title='Follow this artist' style={{ cursor: 'pointer' }}>
                    {follow ? <FavoriteIcon onClick={() => handleFollow('unfollow', userId, artist.id)} title='follow' sx={{ color: '#FFB800' }} style={{ width: '50px', height: '50px', position: 'absolute', right: 0 }} /> : <FavoriteBorderIcon onClick={() => handleFollow('follow', userId, artist.id)} title='follow' sx={{ color: '#FFB800' }} style={{ width: '50px', height: '50px', position: 'absolute', right: 0 }} /> }
                  </Tooltip>
                )
                : null}
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
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px 0', width: '100%' }}>
                <Audio src="retrosoul.mp3" type="audio/mp3" controls />
              </div>
              <Payments />
            </div>

          </div>
        </div>
        <Schedule>
          <h1>Upcoming Events</h1>
          {events
            ? <EventList setPage={setPage} setPageId={setPageId} />
            : undefined}
        </Schedule>
      </ArtistProfileContainer>
    </ArtistContext.Provider>
  );
}
