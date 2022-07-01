import React from 'react';
import PropTypes from 'prop-types';
import { FreshTalentImg, Container, ArtistInfoContainer } from './StyledComponents.js';

export default function ArtistBio({ talent, setPage }) {
  return (
    <Container>
      <div>
        <FreshTalentImg src={talent.pic} alt='Avatar' onClick={() => { setPage('artistProfile'); }} />
      </div>
      <ArtistInfoContainer>
        <h4>
          {talent.genre}
          {' - '}
          {talent.instrument}
        </h4>
        <h1>{talent.name}</h1>
        <p>{talent.bio}</p>
      </ArtistInfoContainer>
    </Container>
  );
}

ArtistBio.propTypes = {
  talent: PropTypes.arrayOf.isRequired,
  setPage: PropTypes.func.isRequired,
};
