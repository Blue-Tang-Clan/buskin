import React, { useState } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height:200px;
  width: 200px;
  border-radius: 10px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export default function ArtistBio({ talent }) {

  return (
    <Container>
      <Img src="https://i.natgeofe.com/n/02ed6887-d7a3-4f95-b42b-6c2ad57c5e48/giraffes-standoff_3x4.jpg" alt="Avatar" />
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