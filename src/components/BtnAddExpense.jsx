import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import SButton from '../style/Button/SButton';

function BtnAddExpense() {
  return (
    <SButton>
      <span><AiOutlinePlusCircle size={20}/></span>
      <span>Adicionar</span>
    </SButton>
  );
}

export default BtnAddExpense;
