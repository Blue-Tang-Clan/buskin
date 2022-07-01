import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistProfile.jsx';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styled from 'styled-components';

const PaymentButton = styled.button`
  marginLeft: 15px;
  border: none;
`;

const paymentButton = function(payType, url) {
  return (
    <button
      type='button'
      className='submitButton'
      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
      style={{ border: 'none' }}
    >
      {payType}
    </button>
  );
};

export default function Venmo() {
  const { artist } = useContext(ArtistContext);

  if (artist.venmo) {
    return (
      <div>
        {artist.venmo !== 'undefined'
          ? (
            <button type='button'>
              <a href={`https://account.venmo.com/u/${artist.venmo}`} target='_blank' rel='noreferrer'>VENMO</a>
            </button>
          ) : <></> }
      </div>
    );
  }
  return (
    <div />
  );
}
