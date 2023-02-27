import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import currentDate from "../helpers/currentDate";
import randomId from "../helpers/randomId";
import ExpenseContext from "./ExpenseContext";

function ExpenseProvider({ children }) {
  const [fullName, setFullName] = useState("Faça Login");
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    id: randomId,
    name: "",
    value: "",
    type: "",
    date: currentDate,
    description: "",
  });

  const { name, value, type } = expense;

  const changeExpenseProperty = useCallback(
    ({ target: { name: inputName, value: inputValue } }) => {
      setExpense({
        ...expense,
        [inputName]: inputValue,
      });
    },
    [expense]
  );

  const calculateTotal = useCallback(
    () => console.log(expenses.map((item) => item.value)),
    [expenses]
  );

  const expenseValidation = useCallback(() => {
    const nameOk = name.length < 1;
    const valueOk = value.length === 0 || value === "0";
    const typeOk = type.length === 0;
    return nameOk || valueOk || typeOk;
  }, [name.length, value, type.length]);

  const addExpense = useCallback(() => {
    setExpenses([...expenses, expense]);
    setExpense({
      name: "",
      value: "",
      type: "",
      date: currentDate,
      description: "",
    });
    calculateTotal();
  }, [expense, expenses, calculateTotal]);

  const values = useMemo(
    () => ({
      fullName,
      setFullName,
      expenses,
      setExpenses,
      expense,
      setExpense,
      changeExpenseProperty,
      expenseValidation,
      addExpense,
    }),
    [
      fullName,
      expenses,
      expense,
      changeExpenseProperty,
      expenseValidation,
      addExpense,
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
