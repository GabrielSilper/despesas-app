import styled from 'styled-components';

const SDForm = styled.form`
  margin: 20px 12px;
  border: 2px solid;
  border-radius: 4px;
  padding: 10px 50px;
  padding-bottom: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  gap: 0px 20px;

  & label {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & label:nth-child(5) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  & div {
    grid-column-start: 3;
    grid-column-end: 5;
  }

  & input, select, textarea {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    padding: 5px 10px;
  }

  & textarea {
    resize: none;
    height: 100px;
  }
`;

export default SDForm;
