import React, { useState, useContext, useEffect } from 'react';
import apiMasters from '../apiMasters.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TopContext } from './App.jsx';
import { EventColContainer, EventRowContainer, FreshTalentImg, TagContainer, HomePageGenreTag, SaveEventButton, EventPageArtistPic, EventButtonContainer } from './StyledComponents.js';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PinDropIcon from '@mui/icons-material/PinDrop';
import EventMap from './EventMap.jsx';
export const ArtistContext = React.createContext();

export const EventLocationContext = React.createContext();

export default function Event() {
  const { pageId, userId, userType, setLogin } = useContext(TopContext);
  const [eventInfo, setEventInfo] = useState({});
  const [artistInfo, setArtistInfo] = useState({});

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

  useEffect(() => {
    apiMasters.getArtistDetails(eventInfo.art_id)
      .then((data) => {
        const info = data.data.rows[0].json_build_object;
        setArtistInfo({
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
      })
      .catch((err) => console.log('This one ww didnt get any data? boohoo', err));
  }, [eventInfo]);

  const saveEvent = () => {
    if (userType === 'anonymous') {
      setLogin(true);
    } else {
      apiMasters.saveEvent(userId, pageId);
    }
  };
  console.log('eventInfo: ', eventInfo);
  return (
    <EventColContainer style={{ marginTop: '50px' }}>
      <EventRowContainer>
        {eventInfo.pic ? <FreshTalentImg src={eventInfo.pic} alt='Event' style={{ marginRight: '50px' }} />
          : <FreshTalentImg src='https://images.sampletemplates.com/wp-content/uploads/2015/04/Event-Program.jpg' alt='Event' style={{ marginRight: '50px' }} />}
        <FavoriteBorderIcon sx={{ color: '#FFB800' }} fontSize='large' onClick={saveEvent} />
        <div style={{ borderRightStyle: 'solid', paddingRight: '40px' }}>
          <h1 style={{ marginTop: -10 }}>{eventInfo.name}</h1>
          <p>
            <EventPageArtistPic src={artistInfo.pic} alt={artistInfo.name} />
            {` ${eventInfo.display_name}`}
          </p>
          <p>
            <PinDropIcon />
            {` ${eventInfo.street} ${eventInfo.city}, ${eventInfo.state}`}
          </p>
          <p>
            <DateRangeIcon />
            {` ${eventInfo.date} ${eventInfo.start_time} ~ ${eventInfo.end_time}`}
          </p>
        </div>
        <div style={{ paddingLeft: '40px' }}>
          <h1 style={{ marginTop: -10 }}>About This Event</h1>
          <p>{eventInfo.description}</p>
        </div>
      </EventRowContainer>
      <TagContainer style={{ marginTop: '30px' }}>
        <HomePageGenreTag value={artistInfo.genre}>
          {artistInfo.genre}
        </HomePageGenreTag>
        <HomePageGenreTag value={artistInfo.instrument}>
          {artistInfo.instrument}
        </HomePageGenreTag>
      </TagContainer>
      <EventRowContainer style={{ marginTop: '50px' }}>
        <EventLocationContext.Provider value={{eventInfo, pageId}}>
          <EventMap />
        </EventLocationContext.Provider>
      </EventRowContainer>
    </EventColContainer>
  );
}
