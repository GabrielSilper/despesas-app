import styled from 'styled-components';

const BodyCollapse = styled.div`
  border: 2px solid black;
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr;

  gap: 0px 0px;

  & span {
    border: 2px solid red;
  }

  & span:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export default BodyCollapse;
