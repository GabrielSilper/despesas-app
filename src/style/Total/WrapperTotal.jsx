import styled from 'styled-components';

const WrapperTotal = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0px;
  @media screen and (min-width: ${({ theme }) => theme.width.small}) {
    padding: 0;
  }
`;

export default WrapperTotal;
