import styled from 'styled-components';

const LabelLogin = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  font-size: 10vw;
  gap: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: ${({ theme }) => theme.width.small}) {
    font-size: 80px;
  }
`;

export default LabelLogin;
