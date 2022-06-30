import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfile.jsx';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// const artist = 'Val-Pizzo';

export default function Venmo() {
  const { artist } = useContext(ArtistContext);
  return (
    <div>
      {artist.venmo !== undefined && artist.venmo !== 'undefined' && artist.venmo.length > 0
        ? (
          <a href={`https://account.venmo.com/u/${artist.venmo}`} target='_blank' rel='noreferrer'>
            <AttachMoneyIcon style={{ width: '40px', height: '40px', marginTop: '35px', marginLeft: '10px' }} />
          </a>
        ) : undefined }
    </div>
  );
}
