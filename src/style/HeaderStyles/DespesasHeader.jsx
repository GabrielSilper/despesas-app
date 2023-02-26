import styled from 'styled-components';

const DespesasHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 7px 0px;
  font-size: 4vw;
  box-shadow: 0px 0px 5px 0px black;

  @media screen and (min-width: ${({ theme }) => theme.width.small}){
    font-size: 22px;
    padding: 5px 0px;
  }
`;

export default DespesasHeader;
