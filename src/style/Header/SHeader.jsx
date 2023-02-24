import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  box-shadow: 0px 0px 5px 0px black;

  background-color: ${({ theme }) => theme.colors.primary};

  & div {
    font-size: 5vw;
    padding: 8px 0px;
    font-weight: 600;
    display: flex;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media screen and (min-width: ${({ theme }) => theme.width.mobileAndTablet}) {
    & div {
        font-size: 24px;
    }
  }
`;

export default SHeader;
