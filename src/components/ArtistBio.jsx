import React from 'react';
import PropTypes from 'prop-types';
import { FreshTalentImg, Container, ArtistInfoContainer } from './StyledComponents.js';

export default function ArtistBio({ talent, setPage, setPageId }) {
  return (
    <Container>
      <div>
        {talent.pic === null
          ? <FreshTalentImg src={'https://images.unsplash.com/photo-1494625941623-b86250a4abf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI4fHxtdXNpY2lhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} alt='Avatar' onClick={() => { setPage('artistProfile'); setPageId(talent.id); }} />
          : <FreshTalentImg src={talent.pic} alt='Avatar' onClick={() => { setPage('artistProfile'); setPageId(talent.id); }} />}
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
