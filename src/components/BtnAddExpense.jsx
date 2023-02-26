import React, { useContext } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import ExpenseContext from '../context/ExpenseContext';
import SButton from '../style/Button/SButton';

function BtnAddExpense() {
  const { expenseValidation, addExpense } = useContext(ExpenseContext);

  return (
    <SButton type="button" disabled={ expenseValidation() } onClick={ addExpense }>
      <span>
        <AiOutlinePlusCircle size={ 20 } />
      </span>
      <span>Adicionar</span>
    </SButton>
  );
}

export default BtnAddExpense;
