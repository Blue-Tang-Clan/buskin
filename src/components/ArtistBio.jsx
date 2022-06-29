import React, { useState } from 'react';
import styled from 'styled-components';
import { EventImg, Container, InfoContainer } from './StyledComponents.js';

export default function ArtistBio({ talent }) {
  return (
    <Container>
      <EventImg src="https://i.natgeofe.com/n/02ed6887-d7a3-4f95-b42b-6c2ad57c5e48/giraffes-standoff_3x4.jpg" alt="Avatar" />
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