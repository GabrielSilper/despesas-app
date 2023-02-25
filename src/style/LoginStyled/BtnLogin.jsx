import styled from 'styled-components';

const BtnLogin = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 3vw;
  padding: 5px 10px;
  width: 20vw;
  font-weight: 500;
  border-radius: 8px;

  @media screen and (min-width: ${({ theme }) => theme.width.mobileAndTablet}){
        width: 200px;
        font-size: 20px;
    }
`;

export default BtnLogin;
