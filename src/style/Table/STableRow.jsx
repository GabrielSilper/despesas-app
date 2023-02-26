import styled from 'styled-components';

const STableRow = styled.tr`
  & th {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  & td, th {
    padding: 5px 10px;
  }

  & td {
    text-align: center;
  }
`;

export default STableRow;
