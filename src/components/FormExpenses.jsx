import React, { useContext, useEffect, useState } from 'react';
import ExpenseContext from '../context/ExpenseContext';
import { BtnAddExpense } from '../style/BtnAddExpese';
import { DescriptionArea } from '../style/DescriptionArea';
import { InputInfos } from '../style/InputInfos';
import { LabelInfos } from '../style/LabelInfos';
import { SelectType } from '../style/SelectType';
import { SFormExpense } from '../style/SFormExpenses';

function FormExpenses() {
  const randomId = (() => {
    const hex = 16;
    const cutSpace = 6;
    const part1 = Math.random().toString(hex).substring(cutSpace);
    const part2 = Math.random().toString(hex).substring(cutSpace);
    return `${part1}-${part2}`;
  })();

  const currentDate = Date.now();
  const today = new Date(currentDate);

  const formattedDate = (date) => {
    const numFormat = { date: 10, month: 8 };
    const dd = date.getDate() > numFormat.date ? date.getDate() : `0${date.getDate()}`;
    const mm = date.getMonth() > numFormat.month
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`;
    const yy = date.getFullYear();

    return `${yy}-${mm}-${dd}`;
  };

  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);
  const [expense, setExpense] = useState({
    id: randomId,
    name: '',
    type: '',
    description: '',
    value: '',
    date: formattedDate(today),
  });

  const handleChange = ({ target: { name, value } }) => {
    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const verifyExpense = () => {
    const { name, type, value } = expense;
    const nameOk = name.length < 2;
    const typeOk = type.length === 0;
    const valueOk = value === '0' || value === '';
    setBtnIsDisabled(nameOk || typeOk || valueOk);
  };

  const handleClick = () => {
    setExpenses([...expenses, expense]);
    setExpense({
      id: randomId,
      name: '',
      type: '',
      description: '',
      value: '',
      date: formattedDate(today),
    });
  };

  useEffect(() => {
    verifyExpense();
  }, [expense.name, expense.type, expense.value]);

  return (
    <SFormExpense>
      <LabelInfos htmlFor="">
        Nome da despesa
        <InputInfos
          type="text"
          name="name"
          onChange={ handleChange }
          value={ expense.name }
        />
      </LabelInfos>
      <LabelInfos htmlFor="">
        Tipo
        <SelectType name="type" onChange={ handleChange } value={ expense.type }>
          <option value="">Selecione</option>
          <option value="Conta">Conta</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Comida">Comida</option>
          <option value="Lazer">Lazer</option>
          <option value="Outro">Outro</option>
        </SelectType>
      </LabelInfos>
      <LabelInfos htmlFor="">
        Descrição
        <DescriptionArea
          name="description"
          onChange={ handleChange }
          value={ expense.description }
        />
      </LabelInfos>
      <LabelInfos htmlFor="">
        Valor
        <InputInfos
          type="number"
          min={ 0 }
          name="value"
          onChange={ handleChange }
          value={ expense.value }
        />
      </LabelInfos>
      <LabelInfos htmlFor="">
        Data da despesa
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
