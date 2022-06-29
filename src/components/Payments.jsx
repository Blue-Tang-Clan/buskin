import React from 'react';
import Venmo from './PaymentButtons/Venmo.jsx';
import PayPal from './PaymentButtons/PayPal.jsx';
import CashApp from './PaymentButtons/CashApp.jsx';

export default function Payments() {
  return (
    <div>
      <Venmo />
      <PayPal />
      <CashApp />
    </div>
  );
}
