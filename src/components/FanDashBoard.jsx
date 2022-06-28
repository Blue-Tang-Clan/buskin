import React, { useEffect, useState } from 'react';
import apiMasters from '../apiMasters.js';
import { Img, ArtistImg } from './StyledComponents.js'

export default function FanDashBoard() {
  const [artistsFollowed, setArtistsFollowed] = useState([]);
  const [eventsSaved, setEventsSaved] = useState([]);

  useEffect(() => {
    // set fan_id = 1;
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
      {artistsFollowed.map((artist) => (<ArtistImg key={artist.artist_id} alt='artist pic' src={artist.artist_pic} />))}
      <br />
      {/* total saved events count */}
      Total saved events:
        <p>{eventsSaved.length}</p>
      {/* list of events */}
      {eventsSaved.map((event) => (<Img key={event.event_id} alt='artist pic' src={event.event_pic} />))}
    </>
  );
}
