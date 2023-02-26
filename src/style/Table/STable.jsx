import styled from 'styled-components';

const STable = styled.table`
    border: 2px solid;
    border-radius: 4px;
    width: 100%;

    & tr:nth-child(2n) {
        background-color: ${({ theme }) => theme.colors.tertiary};
    }
`;

export default STable;
