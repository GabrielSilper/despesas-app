import styled from "styled-components";

const DespesasHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 5px 0px;
  font-size: 3.8vw;

  @media screen and (min-width: ${({ theme }) => theme.width.small}){
    font-size: 20px;
  }
`;

export default DespesasHeader;
