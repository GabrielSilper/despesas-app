import React, { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';
import WrapperQuantity from '../style/Generics Wrappers/WrapperQuantity';

function QuantityExpense() {
  const { expenses } = useContext(ExpenseContext);
  const quantity = expenses.length;
  return <WrapperQuantity>{`Quantidade: ${quantity}`}</WrapperQuantity>;
}

export default QuantityExpense;
