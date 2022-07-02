import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfileQR.jsx';

// const artist = 'Val-Pizzo';

export default function Venmo() {
  const { artist } = useContext(ArtistContext);

  if (artist.venmo) {
    return (
      <div>
        {artist.venmo !== 'undefined'
          ? (
            <button style={{ width: 10 + 'rem', height: 5 + 'rem' }} type='button'>
              <a href={`https://account.venmo.com/u/${artist.venmo}`} target='_blank' rel='noreferrer'>VENMO</a>
            </button>
          ) : null }
      </div>
    );
  }
  return (
    <div />
  );
}
