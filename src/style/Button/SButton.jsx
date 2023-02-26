import styled from 'styled-components';

const SButton = styled.button`
  display: flex;
  align-items: center;

  gap: 5px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  font-weight: 600;
  font-size: 14px;

  border: none;
  border-radius: 30px;
  padding: 10px 50px;

  & span:nth-child(1) {
    padding-top: 4px;
  }

  @media screen and (min-width: ${({ theme }) => theme.width.small}) {
    padding: 8px 35px;
    height: 40px;
  }
`;

export default SButton;
