import React from "react";
import BtnLogin from "../style/LoginStyled/BtnLogin";
import InputNameLogin from "../style/LoginStyled/InputNameLogin";
import LabelLogin from "../style/LoginStyled/LabelLogin";
import SFormLogin from "../style/LoginStyled/SFormLogin";

function Login() {
  return (
    <div>
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
