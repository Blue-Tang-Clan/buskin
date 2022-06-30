import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArtistBio from './ArtistBio.jsx';
import { HomeContainer, HomePageGenreTag, TagContainer, ArtistImg, ArtistImgContainer, ArtistInfoContainer } from './StyledComponents.js';
import { TopContext } from './App.jsx';
import HomeMap from './HomeMap.jsx';
import apiMasters from '../apiMasters.js';
import { ArtistImgList, EventImgList } from './HomePageImg.jsx';

export default function Home({ setPage, setPageId }) {
  const [genres, setGenres] = useState(['Blues', 'Classical', 'Country', 'Dance', 'Hip-Hop', 'Jazz']);
  const [artists, setArtists] = useState([]);
  const [poplarArtist, setPopolarArtist] = useState([]);
  const [comingEvent, setComingEvent] = useState([]);
  const [talent, setTalent] = useState({
    name: 'Monica',
    bio: 'ssssssssssssssssssssssss',
    genre: 'Jazz',
    instrument: 'Piano',
  });
  const handleFilterGenre = (e) => {
    apiMasters.searchHomePageGenre(e.target.innerHTML)
      .then((result) => setArtists(result.data));
  };

  useEffect(() => {
    apiMasters.getHomePageInfo()
      .then((result) => {
        setTalent({
          name: result.data.talent.artist_name,
          bio: result.data.talent.bio,
          genre: result.data.talent.genre,
          instrument: result.data.talent.instrument,
          pic: result.data.talent.pic,
        });
        setPopolarArtist(result.data.artists);
        setComingEvent(result.data.events);
      })
      .then(() => {
        apiMasters.getHomePageGenre()
          .then((result) => {
            const arr = [];
            result.data.forEach((row) => arr.push(row.genres));
            setGenres(arr);
          });
      });
  }, []);

  return (
    <HomeContainer>
      <div>
        <h3>Map</h3>
        <HomeMap />
        <br />
        <h3>Upcoming Performances</h3>
        <EventImgList EventArr={comingEvent} xs={1} setPage={setPage} setPageId={setPageId} />
        <div>
          <h2>Development Team</h2>
          <h3>PM</h3>
          <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03AWEUQWA1-ffb9775b3a6b-512' />
          <h3>DB</h3>
          <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03AZBGUUBD-f8c035e2c3aa-512' />
          <h3>Architect</h3>
          <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03AJP0K0BH-eb4e28704fac-512' />
          <h3>UI</h3>
          <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03BBV9T3LZ-64df3c9dd915-512' />
          <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03AZB62PFC-338e8412806f-512' />
        </div>
      </div>
      <div>
        <div onClick={() => { setPage('artistProfile'); }}>
          <h3>Fresh Talent</h3>
          <div>
            <ArtistBio talent={talent} />
          </div>
        </div>
        <div>
          <h3>Popular Genres</h3>
          <TagContainer>
            {genres.map((genre, i) =>
              <HomePageGenreTag key={i} value={genre} onClick={handleFilterGenre}>{genre}</HomePageGenreTag>
            )}
          </TagContainer>
          <ArtistImgList ArtistArr={artists} xs={1} setPage={setPage} setPageId={setPageId} />
          <h4>Popular Artists</h4>
          <ArtistImgList ArtistArr={poplarArtist} xs={1} setPage={setPage} setPageId={setPageId} />
        </div>
      </div>
    </HomeContainer>
  );
}
