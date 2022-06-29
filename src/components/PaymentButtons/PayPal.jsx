import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfile.jsx';

// const artist = 'https://www.paypal.com/paypalme/valpizzo?country.x=US&locale.x=en_US';

export default function PayPal() {
  const { artist } = useContext(ArtistContext);
  return (
    <div>
      {artist.paypal !== undefined && artist.paypal.length > 0
        ? (
          <button type='button'>
            <a href={`${artist.paypal}`} target='_blank' rel='noreferrer'>PAYPAL</a>
          </button>
        ) : <></>}
    </div>
  );
}
