import React, { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';
import TotalElement from '../style/Total/TotalElement';
import WrapperTotal from '../style/Total/WrapperTotal';

function Total() {
  const { total } = useContext(ExpenseContext);

  const integerTotalPart = () => `${Math.trunc(total)},`;

  const decimalTotalPart = () => {
    const dec = 10;
    const cut = parseInt(total, dec).toString(dec);
    return parseFloat(total).toFixed(2).replace(cut, '').substring(1);
  };

  return (
    <WrapperTotal>
      <TotalElement>
        Total:
        {' '}
        <span>{integerTotalPart()}</span>
        {decimalTotalPart()}
      </TotalElement>
    </WrapperTotal>
  );
}

export default Total;
