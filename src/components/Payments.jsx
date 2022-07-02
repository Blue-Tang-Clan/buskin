import React from 'react';
import styled from 'styled-components';
import Venmo from './PaymentButtons/Venmo.jsx';
import PayPal from './PaymentButtons/PayPal.jsx';
import CashApp from './PaymentButtons/CashApp.jsx';

const Payment = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 350px;
  justify-content: space-between;
`;

export default function Payments() {
  return (
    <Payment>
      <Venmo />
      <PayPal />
      <CashApp />
    </Payment>
  );
}
