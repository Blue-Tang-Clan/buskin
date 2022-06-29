import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import ArtistBio from './ArtistBio.jsx';
import { HomeContainer, GenreTag, TagContainer, ArtistImg, ArtistImgContainer } from './StyledComponents.js';
import { TopContext } from './App.jsx';
import HomeMap from './HomeMap.jsx';
import apiMasters from '../apiMasters.js';

export default function Home() {
  const [genres, setGenres] = useState(['Blues', 'Classical', 'Country', 'Dance', 'Hip-Hop', 'Jazz']);
  const [artists, setArtists] = useState([]);
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
      .then((result) => setTalent({
        name: result.data.talent.artist_name,
        bio: result.data.talent.bio,
        genre: result.data.talent.genre,
        instrument: result.data.talent.instrument,
        pic: result.data.talent.pic,
      }))
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
          <ArtistImgContainer>
            {artists.map((artist, i) => 
              <>
                <ArtistImg src={artist.pic} key={i} alt="Avatar" />
                <label>{artist.artist_name}</label>
              </>
            )} 
          </ArtistImgContainer>
        </div>
      </div>
    </HomeContainer>
  );
}
