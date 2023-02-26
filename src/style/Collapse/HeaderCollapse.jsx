import styled from 'styled-components';

const HeaderCollapse = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-around;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  & span {
    width: 25vw;
    display: flex;
    justify-content: center;
    padding: 3px;
  }

  & span:nth-child(2) {
    justify-content: start;
  }

  & span:nth-child(3) {
    justify-content: end;
  }
`;

export default HeaderCollapse;
