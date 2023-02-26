import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import WrapperButton from "../style/Button/WrapperButton";
import WrapperMobile from "../style/MobileExpenseForm/WrapperMobile";
import BtnAddExpense from "./BtnAddExpense";
import MobileExpenseForm from "./MobileExpenseForm";

function MobileContent() {
  const { expense } = useContext(ExpenseContext);

  return (
    <WrapperMobile>
      <MobileExpenseForm />
      <WrapperButton>
        <BtnAddExpense />
      </WrapperButton>
    </WrapperMobile>
  );
}

export default MobileContent;
