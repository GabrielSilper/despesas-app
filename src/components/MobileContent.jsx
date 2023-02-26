import React from 'react';
import WrapperButton from '../style/Button/WrapperButton';
import WrapperMobile from '../style/MobileExpenseForm/WrapperMobile';
import BtnAddExpense from './BtnAddExpense';
import MobileExpenseForm from './MobileExpenseForm';

function MobileContent() {
  return (
    <WrapperMobile>
      <MobileExpenseForm />
      <WrapperButton>
        <BtnAddExpense />
      </WrapperButton>
    </WrapperMobile>
  );
}

export default MobileContent;
