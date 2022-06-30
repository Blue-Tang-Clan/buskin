import React, { useState } from 'react';
import styled from 'styled-components';
import { EventImg, Container, InfoContainer } from './StyledComponents.js';
import { ArtistInfoContainer, StyleP, GenreTitle } from './StyledComponents.js';

export default function ArtistBio({ talent }) {
  return (
    <Container>
      <EventImg src={talent.pic} alt="Avatar" />
      <ArtistInfoContainer>
        <GenreTitle>
          {talent.genre}
          {' - '}
          {talent.instrument}
        </GenreTitle>
        <div>
          <h3>{talent.name}</h3>
          <StyleP>{talent.bio}</StyleP>
        </div>
        <audio src="retrosoul.mp3" type="audio/mp3" controls></audio>
      </ArtistInfoContainer>
    </Container>
  );
}
