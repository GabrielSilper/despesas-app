import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import ExpenseContext from './ExpenseContext';

function ExpenseProvider({ children }) {
  const [fullName, setFullName] = useState('Faça Login');

  const values = useMemo(() => ({ fullName, setFullName }), [fullName]);

  return (
    <ExpenseContext.Provider value={ values }>{children}</ExpenseContext.Provider>
  );
}

ExpenseProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ExpenseProvider;
