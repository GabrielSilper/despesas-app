import React from 'react';
import DesktopContent from '../components/DesktopContent';
import FormExpenses from '../components/FormExpenses';
import Header from '../components/Header';
import MobileContent from '../components/MobileContent';

function Expenses() {
  return (
    <div className="Expenses">
      <Header />
      <FormExpenses />
      <MobileContent />
      <DesktopContent />
    </div>
  );
}

export default Expenses;
