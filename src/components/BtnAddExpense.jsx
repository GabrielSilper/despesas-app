import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import SButton from '../style/SButton';

function BtnAddExpense() {
  return (
    <SButton>
      <span><AiOutlinePlusCircle /></span>
      <span>Adicionar</span>
    </SButton>
  );
}

export default BtnAddExpense;
