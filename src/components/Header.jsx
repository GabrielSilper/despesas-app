import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import DespesasHeader from "../style/HeaderStyles/DespesasHeader";

function Header() {
  return (
    <DespesasHeader>
      <span>Despesas App</span>
      <GiTwoCoins />
    </DespesasHeader>
  );
}

export default Header;
