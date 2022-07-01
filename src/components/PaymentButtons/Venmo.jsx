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

  return (
    <PaymentButton>
      {artist.venmo !== undefined && artist.venmo !== 'undefined' && artist.venmo.length > 0
        ? (
          // <button type='button' className='submitButton' onClick={() => openPaymentTab(`https://account.venmo.com/u/${artist.venmo}`)}>
          //   VENMO
          // </button>
          paymentButton('VENMO', `https://account.venmo.com/u/${artist.venmo}`)
        ) : undefined }
    </PaymentButton>
  );
}
