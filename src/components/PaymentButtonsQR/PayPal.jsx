import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfileQR.jsx';

// const artist = 'https://www.paypal.com/paypalme/valpizzo?country.x=US&locale.x=en_US';

export default function PayPal() {
  const { artist } = useContext(ArtistContext);

  if (artist.paypal) {
    return (
      <div>
        {artist.paypal !== 'undefined'
          ? (
            <button style={{ width: 10 + 'rem', height: 5 + 'rem' }} type='button'>
              <a href={`${artist.paypal}`} target='_blank' rel='noreferrer'>PAYPAL</a>
            </button>
          ) : <></>}
      </div>
    );
  }
  return (
    <div />
  );
}
