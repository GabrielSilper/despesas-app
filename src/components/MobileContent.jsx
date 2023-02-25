import React from 'react';
import WrapperMobile from '../style/MobileExpenseForm/WrapperMobile';
import BtnAddExpense from './BtnAddExpense';
import MobileExpenseForm from './MobileExpenseForm';

function MobileContent() {
  return (
    <WrapperMobile>
      <MobileExpenseForm />
      <BtnAddExpense />
    </WrapperMobile>
  );
}

export default MobileContent;
