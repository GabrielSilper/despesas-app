import React from 'react';
import SMForm from '../style/MobileExpenseForm/SMForm';

function MobileExpenseForm() {
  return (
    <SMForm>
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
    </SMForm>
  );
}

export default MobileExpenseForm;
