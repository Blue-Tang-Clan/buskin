import React from 'react';
import Venmo from './PaymentButtonsQR/Venmo.jsx';
import PayPal from './PaymentButtonsQR/PayPal.jsx';
import CashApp from './PaymentButtonsQR/CashApp.jsx';

export default function Payments() {
  return (
    <div>
      <Venmo />
      <PayPal />
      <CashApp />
    </div>
  );
}
