import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GiTwoCoins } from 'react-icons/gi';
import ExpenseContext from '../context/ExpenseContext';
import BtnLogin from '../style/LoginStyled/BtnLogin';
import InputNameLogin from '../style/LoginStyled/InputNameLogin';
import LabelLogin from '../style/LoginStyled/LabelLogin';
import SFormLogin from '../style/LoginStyled/SFormLogin';

function FormLogin() {
  const [loginName, setLoginName] = useState('');
  const { setFullName } = useContext(ExpenseContext);
  const history = useHistory();

  const handleChange = ({ target: { value } }) => {
    setLoginName(value);
  };

  const handleClick = () => {
    setFullName(loginName);
    history.push('/expenses');
  };

  return (
    <SFormLogin>
      <LabelLogin htmlFor="input-name-login">
        <span>
          Despesas App
          <GiTwoCoins />
        </span>
        <InputNameLogin
          id="input-name-login"
          value={ loginName }
          onChange={ handleChange }
          placeholder="Nome..."
        />
      </LabelLogin>
      <BtnLogin
        type="button"
        onClick={ handleClick }
        disabled={ loginName.length <= 2 }
      >
        Entrar
      </BtnLogin>
    </SFormLogin>
  );
}

export default FormLogin;
