import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfile.jsx';

// const artist = 'Val-Pizzo';

export default function Venmo() {
  const { artist } = useContext(ArtistContext);
  return (
    <div>
      {artist.venmo !== undefined && artist.venmo.length > 0
        ? (
          <button type='button'>
            <a href={`https://account.venmo.com/u/${artist.venmo}`} target='_blank' rel='noreferrer'>VENMO</a>
          </button>
        ) : <></> }
    </div>
  );
}
