import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import STable from "../style/Table/STable";
import STableRow from "../style/Table/STableRow";
import WrapperTable from "../style/Table/WrapperTable";
import Empty from "./Empty";
import ValueTableRow from "./ValueTableRow";

function TableExpense() {
  const { expenses } = useContext(ExpenseContext);

  const isExpensesEmpty = expenses.length === 0;

  const expensesList = expenses.map((expense) => (
    <ValueTableRow expense={expense} key={expense.id} />
  ));

  const headerTable = (
    <STableRow>
      <th>Nome da Despesa</th>
      <th>Valor</th>
      <th>Tipo</th>
      <th>Data</th>
      <th>Descrição</th>
    </STableRow>
  );

  return (
    <WrapperTable>
      {isExpensesEmpty ? (
        <Empty />
      ) : (
        <STable>
          {headerTable}
          {expensesList}
        </STable>
      )}
    </WrapperTable>
  );
}

export default TableExpense;
