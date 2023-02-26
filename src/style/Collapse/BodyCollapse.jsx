import styled from "styled-components";

const BodyCollapse = styled.div`
  border-bottom: 2px solid;
  border-left: 2px solid;
  border-right: 2px solid;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: grid;

  grid-template-columns: 1fr 3fr;
  grid-template-rows: 30px 3fr;

  gap: 0px 0px;

  & span {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 20px;
  }

  & span:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: justify;
    padding: 20px;
  }
`;

export default BodyCollapse;
