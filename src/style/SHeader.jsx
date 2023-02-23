import styled from 'styled-components';

export const SHeader = styled.header`
    display: flex;
    justify-content: space-between;

    border: 1px solid;

    & span {
        padding: 10px 15px;
        color: ${({ theme }) => theme.colors.secondary};
    }
`;
