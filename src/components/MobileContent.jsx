import React, { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';
import WrapperButton from '../style/Button/WrapperButton';
import WrapperList from '../style/Generics Wrappers/WrapperList';
import WrapperMobile from '../style/MobileExpenseForm/WrapperMobile';
import BtnAddExpense from './BtnAddExpense';
import CollapseComponent from './CollapseComponent';
import Empty from './Empty';
import MobileExpenseForm from './MobileExpenseForm';
import QuantityExpense from './QuantityExpense';

function MobileContent() {
  const { expenses } = useContext(ExpenseContext);
  const isExpenseEmpty = expenses.length === 0;
  const expenseList = expenses.map((expense) => (
    <CollapseComponent expense={ expense } key={ expense.id } />
  ));

  return (
    <WrapperMobile>
      <MobileExpenseForm />
      <WrapperButton>
        <BtnAddExpense />
      </WrapperButton>
      <WrapperList>
        {isExpenseEmpty ? (
          <Empty />
        ) : (
          <>
            <QuantityExpense />
            {expenseList}
          </>
        )}
      </WrapperList>
    </WrapperMobile>
  );
}

export default MobileContent;
