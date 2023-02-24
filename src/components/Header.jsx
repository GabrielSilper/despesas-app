import React from 'react';
import { GiTwoCoins } from 'react-icons/gi';
import SHeader from '../style/Header/SHeader';

function Header() {
  return (
    <SHeader>
      <div>
        <span>Despesas App</span>
        <GiTwoCoins />
      </div>
    </SHeader>
  );
}

export default Header;
