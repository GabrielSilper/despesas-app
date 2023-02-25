import styled from "styled-components";

const WrapperDesktop = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.width.small}) {
    display: none;
  }
`;

export default WrapperDesktop;
