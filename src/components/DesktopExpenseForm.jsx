import React from 'react';
import WrapperButton from '../style/Button/WrapperButton';
import SDForm from '../style/DesktopExpensesForm/SDForm';
import BtnAddExpense from './BtnAddExpense';

function DesktopExpenseForm() {
  return (
    <SDForm>
      <label htmlFor="">
        <span>Nome da Despesa</span>
        <input type="text" />
      </label>
      <label htmlFor="">
        <span>Valor</span>
        <input type="number" />
      </label>
      <label htmlFor="">
        <span>Tipo</span>
        <select name="" id="">
          <option value="">Selecione</option>
          <option value="">Conta</option>
          <option value="">Cartão</option>
          <option value="">Trabalho</option>
          <option value="">Comida</option>
          <option value="">Lazer</option>
        </select>
      </label>
      <label htmlFor="">
        <span>Data</span>
        <input type="date" />
      </label>
      <label htmlFor="">
        <span>Descrição</span>
        <textarea />
      </label>
      <WrapperButton>
        <BtnAddExpense />
      </WrapperButton>
    </SDForm>
  );
}

export default DesktopExpenseForm;
