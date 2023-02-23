import React, { useContext } from 'react';
import { GiTwoCoins } from 'react-icons/gi';
import { SHeader } from '../style/SHeader';
import ExpenseContext from '../context/ExpenseContext';

function Header() {
  const { fullName } = useContext(ExpenseContext);

  return (
    <SHeader>
      <span>
        Despesas App
        <i>
          <GiTwoCoins />
        </i>
      </span>
      <span>{fullName}</span>
    </SHeader>
  );
}

export default Header;
