import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfile.jsx';

// const artist = 'pizzoval';

export default function Venmo() {
  const { artist } = useContext(ArtistContext);

  if (artist.cashapp) {
    return (
      <div>
        {artist.paypal !== 'undefined'
          ? (
            <button
              type='button'
              className='submitButton'
              onClick={() => window.open(`https://cash.app/$${artist.cashapp}`, '_blank', 'noopener,noreferrer')}
            >
              CASHAPP
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
