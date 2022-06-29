import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfile.jsx';

// const artist = 'pizzoval';

export default function Venmo() {
  const { artist } = useContext(ArtistContext);

  return (
    <div>
      {artist.cashapp !== undefined && artist.cashapp !== 'undefined'
        ? (
          <button type='button'>
            <a href={`https://cash.app/$${artist.cashapp}`} target='_blank' rel='noreferrer'>VENMO</a>
          </button>
        ) : <></> }
    </div>
  );
}
