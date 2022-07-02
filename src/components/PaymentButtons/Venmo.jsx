import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfile.jsx';

export default function Venmo() {
  const { artist } = useContext(ArtistContext);

  if (artist.venmo) {
    return (
      <div>
        {artist.venmo !== 'undefined'
          ? (
            <button
              type='button'
              className='submitButton'
              onClick={() => window.open(`https://account.venmo.com/u/${artist.venmo}`, '_blank', 'noopener,noreferrer')}
            >
              VENMO
            </button>
          )
          : null }
      </div>
    );
  }
  return (
    <div />
  );
}
