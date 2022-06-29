import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import ArtistBio from './ArtistBio.jsx';
import { HomeContainer, GenreTag, TagContainer, ArtistImg, ArtistImgContainer } from './StyledComponents.js';
import { TopContext } from './App.jsx';
import HomeMap from './HomeMap.jsx';
import apiMasters from '../apiMasters.js';
import { ArtistImgList, EventImgList } from './HomePageImg.jsx';

export default function Home({ setPage, setPageId }) {
  const [genres, setGenres] = useState(['Blues', 'Classical', 'Country', 'Dance', 'Hip-Hop', 'Jazz']);
  const [artists, setArtists] = useState([]);
  const [poplarArtist, setPopolarArtist] = useState([]);
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
        <EventImgList EventArr={poplarArtist} xs={12} setPage={setPage} setPageId={setPageId} />
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
              <GenreTag key={i} value={genre} onClick={handleFilterGenre}>{genre}</GenreTag>
            )}
          </TagContainer>
          <ArtistImgList ArtistArr={artists} xs={12} setPage={setPage} setPageId={setPageId} />
        </div>
      </div>
    </HomeContainer>
  );
}
