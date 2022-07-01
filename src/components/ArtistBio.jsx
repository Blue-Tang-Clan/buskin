import React from 'react';
import PropTypes from 'prop-types';
import { FreshTalentImg, Container, ArtistInfoContainer } from './StyledComponents.js';

export default function ArtistBio({ talent, setPage, setPageId }) {
  console.log('talent info: ', talent);
  return (
    <Container>
      <div>
        <FreshTalentImg src={talent.pic} alt='Avatar' onClick={() => { setPage('artistProfile'); setPageId(talent.id); }} />
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
  setPageId: PropTypes.func.isRequired,
};
