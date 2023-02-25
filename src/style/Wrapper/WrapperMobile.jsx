import styled from 'styled-components';

const WrapperMobile = styled.div`
  display: block;
  border: 2px solid;

  @media screen and (min-width: ${({ theme }) => theme.width.mobileAndTablet}) {
    display: none;
  }
`;

export default WrapperMobile;
