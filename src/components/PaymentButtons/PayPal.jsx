import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfile.jsx';

// const artist = 'https://www.paypal.com/paypalme/valpizzo?country.x=US&locale.x=en_US';

export default function PayPal() {
  const { artist } = useContext(ArtistContext);

  if (artist.paypal) {
    return (
      <div>
        {artist.paypal !== 'undefined'
          ? (
            <button
              type='button'
              className='submitButton'
              onClick={() => window.open(`https://account.venmo.com/u/${artist.venmo}`, '_blank', 'noopener,noreferrer')}
            >
              PAYPAL
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
