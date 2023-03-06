import React from "react";
import Header from "../components/Header";
import BtnLogin from "../style/LoginStyled/BtnLogin";
import InputNameLogin from "../style/LoginStyled/InputNameLogin";
import LabelLogin from "../style/LoginStyled/LabelLogin";
import SFormLogin from "../style/LoginStyled/SFormLogin";

function Login() {
  return (
    <div>
      <Header />
      <SFormLogin>
        <LabelLogin>
          <span>Despesas App</span>
          <InputNameLogin />
        </LabelLogin>
        <BtnLogin>Entrar</BtnLogin>
      </SFormLogin>
    </div>
  );
}

export default Login;
