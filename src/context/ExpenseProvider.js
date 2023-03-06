import PropTypes from 'prop-types';
import React from 'react';
import ExpenseContext from './ExpenseContext';

function ExpenseProvider({ children }) {
  return (
    <ExpenseContext.Provider value="limpando">
      {children}
    </ExpenseContext.Provider>
  );
}

ExpenseProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ExpenseProvider;
