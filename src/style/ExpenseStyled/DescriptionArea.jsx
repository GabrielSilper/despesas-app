import styled from 'styled-components';

const DescriptionArea = styled.textarea`
    width: ${({ theme }) => theme.width.inputOnMobile};
    height: 80px;
`;

export default DescriptionArea;
