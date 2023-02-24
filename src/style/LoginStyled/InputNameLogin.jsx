import styled from 'styled-components';

const InputNameLogin = styled.input`
  padding: 5px 10px;
  outline: none;
  width: 40vw;
  font-size: 3vw;
  border: none;
  border-radius: 8px;

  @media screen and (min-width: ${({ theme }) => theme.width.mobileAndTablet}) {
    width: 400px;
    font-size: 20px;
  }
`;

export default InputNameLogin;
