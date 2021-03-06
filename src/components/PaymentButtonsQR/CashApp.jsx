import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfileQR.jsx';

// const artist = 'pizzoval';

export default function Venmo() {
  const { artist } = useContext(ArtistContext);

  if (artist.cashapp) {
    return (
      <div>
        {artist.cashapp !== 'undefined'
          ? (
            <button style={{ width: 10 + 'rem', height: 5 + 'rem' }} type='button'>
              <a href={`https://cash.app/$${artist.cashapp}`} target='_blank' rel='noreferrer'>CASHAPP</a>
            </button>
          ) : null }
      </div>
    );
  }
  return (
    <div />
  );
}
