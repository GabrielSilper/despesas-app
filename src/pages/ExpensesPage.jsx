import React from 'react';
import MobileContent from '../components/MobileContent';
import DesktopContent from '../components/DesktopContent';
import Total from '../components/Total';

function ExpensesPage() {
  return (
    <div>
      <Total />
      <MobileContent />
      <DesktopContent />
    </div>
  );
}

export default ExpensesPage;
