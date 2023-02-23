import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import ExpenseContext from './ExpenseContext';

function ExpenseProvider({ children }) {
  const [fullName, setFullName] = useState('Faça Login');
  const [expenses, setExpenses] = useState([]);

  const values = useMemo(
    () => ({ fullName, setFullName, expenses, setExpenses }),
    [fullName, expenses],
  );

  return (
    <ExpenseContext.Provider value={ values }>{children}</ExpenseContext.Provider>
  );
}

ExpenseProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ExpenseProvider;
