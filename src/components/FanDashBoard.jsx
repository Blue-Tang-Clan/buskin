import React, { useEffect, useState } from 'react';
import apiMasters from '../apiMasters.js';
import { EventImg, ArtistImg } from './StyledComponents.js';
import styled from 'styled-components';

export default function FanDashBoard() {
  const [artistsFollowed, setArtistsFollowed] = useState([]);
  const [eventsSaved, setEventsSaved] = useState([]);

  const ArtistMImg = styled(ArtistImg)`
    height: 100px;
    width: 100px;
    margin: 5px;
  `;

  const EventsMImg = styled(EventImg)`
  height: 100px;
  width: 100px;
  margin: 5px;
`;

  useEffect(() => {
    // needs to change fan_id dynamically
    apiMasters.getFanDashBoard(1)
      .then((response) => {
        setArtistsFollowed(response.data.artists);
        setEventsSaved(response.data.events);
      })
      .catch((err) => {
        console.log('getFanDashBoard err', err);
      });
  }, []);

  return (
    <>
      {/* total followed artists count */}
      Total followed artists:
        <p>{artistsFollowed.length}</p>
      {/* list of artist */}
      {artistsFollowed.map((artist) => (<ArtistMImg key={artist.artist_id} alt='artist pic' src={artist.artist_pic} />))}
      <br />
      {/* total saved events count */}
      Total saved events:
        <p>{eventsSaved.length}</p>
      {/* list of events */}
      {eventsSaved.map((event) => (<EventsMImg key={event.event_id} alt='artist pic' src={event.event_pic} />))}
    </>
  );
}
