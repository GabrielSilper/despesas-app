import React, { useContext, useEffect, useState } from 'react';
import currentDate from '../constants/currentDate';
import ExpenseContext from '../context/ExpenseContext';
import BtnAddExpense from '../style/ExpenseStyled/BtnAddExpese';
import DescriptionArea from '../style/ExpenseStyled/DescriptionArea';
import InputInfos from '../style/ExpenseStyled/InputInfos';
import LabelInfos from '../style/ExpenseStyled/LabelInfos';
import SelectType from '../style/ExpenseStyled/SelectType';
import SFormExpense from '../style/ExpenseStyled/SFormExpenses';

function FormExpenses() {
  const randomId = (() => {
    const hex = 16;
    const cutSpace = 6;
    const part1 = Math.random().toString(hex).substring(cutSpace);
    const part2 = Math.random().toString(hex).substring(cutSpace);
    return `${part1}-${part2}`;
  })();

  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);
  const [expense, setExpense] = useState({
    id: randomId,
    name: '',
    type: '',
    description: '',
    value: '',
    date: currentDate,
  });
  const { name, type, value } = expense;

  const handleChange = ({ target: { name: inputName, value: inputValue } }) => {
    setExpense({
      ...expense,
      [inputName]: inputValue,
    });
  };

  const handleClick = () => {
    setExpenses([...expenses, expense]);
    setExpense({
      id: randomId,
      name: '',
      type: '',
      description: '',
      value: '',
      date: currentDate,
    });
  };

  // this useEffect is validating my button BtnAddExpense
  useEffect(() => {
    const nameOk = name.length < 2;
    const typeOk = type.length === 0;
    const valueOk = value === '0' || value === '';
    setBtnIsDisabled(nameOk || typeOk || valueOk);
  }, [name, type, value]);

  return (
    <SFormExpense>
      <LabelInfos htmlFor="">
        <span>Nome da despesa</span>
        <InputInfos
          type="text"
          name="name"
          onChange={ handleChange }
          value={ name }
        />
      </LabelInfos>
      <LabelInfos htmlFor="">
        <span>Tipo</span>
        <SelectType name="type" onChange={ handleChange } value={ type }>
          <option value="">Selecione</option>
          <option value="Conta">Conta</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Comida">Comida</option>
          <option value="Lazer">Lazer</option>
          <option value="Outro">Outro</option>
        </SelectType>
      </LabelInfos>
      <LabelInfos htmlFor="">
        <span>Descrição</span>
        <DescriptionArea
          name="description"
          onChange={ handleChange }
          value={ expense.description }
        />
      </LabelInfos>
      <LabelInfos htmlFor="">
        <span>Valor</span>
        <InputInfos
          type="number"
          min={ 0 }
          name="value"
          onChange={ handleChange }
          value={ value }
        />
      </LabelInfos>
      <LabelInfos htmlFor="">
        <span>Data da despesa</span>
        <InputInfos
          type="date"
          name="date"
          value={ expense.date }
          onChange={ handleChange }
        />
      </LabelInfos>
      <BtnAddExpense
        type="button"
        disabled={ btnIsDisabled }
        onClick={ handleClick }
      >
        Adicionar despesa
      </BtnAddExpense>
    </SFormExpense>
  );
}

export default FormExpenses;
