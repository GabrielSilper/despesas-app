import React, { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';
import SMForm from '../style/MobileExpenseForm/SMForm';

function MobileExpenseForm() {
  const { changeExpenseProperty, expense } = useContext(ExpenseContext);
  const { name, value, type, date, description } = expense;

  return (
    <SMForm>
      <label>
        <span>Nome da Despesa</span>
        <input
          type="text"
          name="name"
          onChange={ changeExpenseProperty }
          value={ name }
        />
      </label>
      <label>
        <span>Valor</span>
        <input
          type="number"
          name="value"
          onChange={ changeExpenseProperty }
          value={ value }
        />
      </label>
      <label>
        <span>Tipo</span>
        <select name="type" onChange={ changeExpenseProperty } value={ type }>
          <option value="">Selecione</option>
          <option value="Conta">Conta</option>
          <option value="Cartão">Cartão</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Comida">Comida</option>
          <option value="Lazer">Lazer</option>
          <option value="Outros">Outros</option>
        </select>
      </label>
      <label>
        <span>Data</span>
        <input
          type="date"
          name="date"
          onChange={ changeExpenseProperty }
          value={ date }
        />
      </label>
      <label>
        <span>Descrição</span>
        <textarea
          name="description"
          onChange={ changeExpenseProperty }
          value={ description }
        />
      </label>
    </SMForm>
  );
}

export default MobileExpenseForm;
