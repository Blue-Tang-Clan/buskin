import React, { useState } from 'react';
import styled from 'styled-components';
import { EventImg, Container, InfoContainer } from './StyledComponents.js';

export default function ArtistBio({ talent }) {
  return (
    <Container>
      <EventImg src={talent.pic} alt="Avatar" />
      <InfoContainer>
        <div>
          {talent.genre}
          {' - '}
          {talent.instrument}
        </div>
        <div>
          <h4>{talent.name}</h4>
        </div>
        <div>
          <p>{talent.bio}</p>
        </div>
      </InfoContainer>
    </Container>
  );
}
