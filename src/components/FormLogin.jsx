import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ExpenseContext from '../context/ExpenseContext';
import { BtnEntrar } from '../style/BtnEntrar';
import { InputNameLogin } from '../style/InputNameLogin';
import { LabelLogin } from '../style/LabelLogin';
import { SFormLogin } from '../style/SFormLogin';

function FormLogin() {
  const [loginName, setLoginName] = useState('');
  const { setFullName } = useContext(ExpenseContext);
  const history = useHistory();

  const handleChange = ({ target: { value } }) => {
    setLoginName(value);
  };

  const handleClick = () => {
    setFullName(loginName);
    history.push('/despesas');
  };

  return (
    <SFormLogin>
      <LabelLogin htmlFor="input-name-login">
        Nome
        <InputNameLogin
          id="input-name-login"
          value={ loginName }
          onChange={ handleChange }
        />
      </LabelLogin>
      <BtnEntrar type="button" onClick={ handleClick }>
        Entrar
      </BtnEntrar>
    </SFormLogin>
  );
}

export default FormLogin;
