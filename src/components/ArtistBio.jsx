import React, { useState } from 'react';
import styled from 'styled-components';
import { FreshTalentImg, Container, ArtistInfoContainer } from './StyledComponents.js';

export default function ArtistBio({ talent }) {
  return (
    <Container>
      <div>
        <FreshTalentImg src={talent.pic} alt="Avatar" />
      </div>
      <ArtistInfoContainer>
          <h4>{talent.genre}{' - '}{talent.instrument}</h4>
          <h1>{talent.name}</h1>
          <p>{talent.bio}</p>
      </ArtistInfoContainer>
    </Container>
  );
}
