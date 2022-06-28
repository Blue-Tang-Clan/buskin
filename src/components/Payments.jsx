import React from 'react';
import Venmo from './Venmo.jsx';
import PayPal from './PayPal.jsx';
import CashApp from './CashApp.jsx';

export default function Payments() {
  return (
    <div>
      <Venmo />
      <PayPal />
      <CashApp />
    </div>
  );
}
