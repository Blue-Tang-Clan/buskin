import React, { useState } from 'react';
import styled from 'styled-components';
import ArtistBio from './ArtistBio.jsx';
import { HomeContainer, GenreTag, TagContainer, ArtistImg, ArtistImgContainer } from './StyledComponents.js';

export default function Home() {
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
        <h3>Trending</h3>
      </div>
      <div>
        <h3>Fresh Talent</h3>
        <div>
          <ArtistBio talent={talent} />
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