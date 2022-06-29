import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ArtistBio from './ArtistBio.jsx';
import { HomeContainer, GenreTag, TagContainer, ArtistImg, ArtistImgContainer } from './StyledComponents.js';
import {TopContext} from './App.jsx';
import HomeMap from './HomeMap.jsx';

export default function Home() {
  const {page, setPage} = useContext(TopContext);
  const [genres, setGenres] = useState(['Blues', 'Classical', 'Country', 'Dance', 'Hip-Hop', 'Jazz']);
  const [artists, setArtists] = useState([]);
  const [talent, setTalent] = useState({
    name: 'Monica',
    bio: 'ssssssssssssssssssssssss',
    genre: 'Jazz',
    instrument: 'Piano',
  });
  const handleFilterGenre = () => {

  };

  return (
    <HomeContainer>
      <div>
        <h3>Map</h3>
        <HomeMap />
      </div>
      <div>
        <div onClick={() => {setPage('artistProfile');}}>
          <h3>Fresh Talent</h3>
          <div>
            <ArtistBio talent={talent} />
          </div>
        </div>
        <div>
          <h3>Popular Genres</h3>
          <TagContainer>
            {genres.map((genre, i) =>
              <GenreTag key={i} onClick={handleFilterGenre}>{genre}</GenreTag>
            )}
          </TagContainer>
          <ArtistImgContainer>
            {/* {artists.map((artist, i) => */}
            <>
              {/* <img src={artist.url} alt="Avatar" /> */}
              <ArtistImg src="https://i.natgeofe.com/n/02ed6887-d7a3-4f95-b42b-6c2ad57c5e48/giraffes-standoff_3x4.jpg" alt="Avatar" />

              {/* <label>{artist.name}</label> */}
            </>
            {/* )} */}
          </ArtistImgContainer>
        </div>
      </div>
    </HomeContainer>
  );
};