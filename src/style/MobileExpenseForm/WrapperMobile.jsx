import styled from 'styled-components';

const WrapperMobile = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.width.small}){
        display: none;
    }
`;

export default WrapperMobile;
