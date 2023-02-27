import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import randomId from "../helpers/randomId";
import currentDate from "../helpers/currentDate";
import ExpenseContext from "./ExpenseContext";
import {
  addExpenseToLocal,
  getExpensesInfo,
  getUser,
} from "../helpers/nameLocal";

function ExpenseProvider({ children }) {
  const [fullName, setFullName] = useState(getUser());
  const [expenses, setExpenses] = useState(getExpensesInfo(fullName));
  const [total, setTotal] = useState(0);
  const [expense, setExpense] = useState({
    id: randomId(),
    name: "",
    value: "",
    type: "",
    date: currentDate(),
    description: "",
  });
  const { name, value, type } = expense;

  // Função para salvar o que é escritos nos campos do formulário
  const changeExpenseProperty = useCallback(
    ({ target: { name: inputName, value: inputValue } }) => {
      setExpense({
        ...expense,
        [inputName]: inputValue,
      });
    },
    [expense]
  );

  // Função para validar que os campos nome, tipo e valor foram preenchidos e aplicar na propriedade disabled do botão para habiltar.
  const expenseValidation = useCallback(() => {
    const nameOk = name.length < 2;
    const valueOk = value.length === 0 || value === "0";
    const typeOk = type.length === 0;
    return nameOk || valueOk || typeOk;
  }, [name.length, value, type.length]);

  // UseEffect pra calcular o total
  useEffect(() => {
    const calculateTotal = () =>
      expenses
        .map((curExpense) => Number(curExpense.value))
        .reduce((acc, cur) => {
          acc += cur;
          return acc;
        }, 0);
    setTotal(calculateTotal());
  }, [expenses]);

  // Função para adicionar o que tem no estado expense e setar no estados expenses e criar um array de objetos expense.
  const addExpense = useCallback(() => {
    addExpenseToLocal(fullName, expense);
    setExpenses([...expenses, expense]);
    setExpense({
      id: randomId(),
      name: "",
      value: "",
      type: "",
      date: currentDate(),
      description: "",
    });
  }, [expense, expenses, fullName]);
  // const addExpense = useCallback(() => {}, []);

  // Meu useMemo pra salvar informações na memória e não precisar recalcular eles novamente e melhorando o desempenho.
  const values = useMemo(
    () => ({
      fullName,
      setFullName,
      expenses,
      setExpenses,
      expense,
      setExpense,
      addExpense,
      changeExpenseProperty,
      expenseValidation,
      total,
    }),
    [
      fullName,
      expenses,
      expense,
      total,
      addExpense,
      changeExpenseProperty,
      expenseValidation,
    ]
  );

  return (
    <ExpenseContext.Provider value={values}>{children}</ExpenseContext.Provider>
  );
}

ExpenseProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ExpenseProvider;
