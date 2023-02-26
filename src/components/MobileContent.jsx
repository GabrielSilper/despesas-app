import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import WrapperButton from "../style/Button/WrapperButton";
import WrapperMobile from "../style/MobileExpenseForm/WrapperMobile";
import WrapperList from "../style/WrapperList";
import BtnAddExpense from "./BtnAddExpense";
import CollapseComponent from "./CollapseComponent";
import Empty from "./Empty";
import MobileExpenseForm from "./MobileExpenseForm";

function MobileContent() {
  const { expenses } = useContext(ExpenseContext);
  const isExpenseEmpty = expenses.length === 0;
  const expenseList = expenses.map((expense) => (
    <CollapseComponent expense={expense} key={expense.id} />
  ));

  return (
    <WrapperMobile>
      <MobileExpenseForm />
      <WrapperButton>
        <BtnAddExpense />
      </WrapperButton>
      <WrapperList>{isExpenseEmpty ? <Empty /> : expenseList}</WrapperList>
    </WrapperMobile>
  );
}

export default MobileContent;
