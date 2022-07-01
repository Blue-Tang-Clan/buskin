import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfile.jsx';

// const artist = 'pizzoval';

export default function Venmo() {
  const { artist } = useContext(ArtistContext);

  if (artist.cashapp) {
    return (
      <div>
        {artist.cashapp !== 'undefined'
          ? (
            <button type='button'>
              <a href={`https://cash.app/$${artist.cashapp}`} target='_blank' rel='noreferrer'>CASHAPP</a>
            </button>
          ) : <></> }
      </div>
    );
  }
  return (
    <div />
  );
}
