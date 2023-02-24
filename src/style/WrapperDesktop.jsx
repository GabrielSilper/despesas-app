import styled from 'styled-components';

const WrapperDesktop = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.width.mobileAndTablet}) {
    display: block;
    border: 2px solid;
  }
`;

export default WrapperDesktop;
