import React from 'react';
import WrapperDesktop from '../style/DesktopExpensesForm/WrapperDesktop';
import DesktopExpenseForm from './DesktopExpenseForm';
import TableExpense from './TableExpense';

function DesktopContent() {
  return (
    <WrapperDesktop>
      <DesktopExpenseForm />
      <TableExpense />
    </WrapperDesktop>
  );
}

export default DesktopContent;
