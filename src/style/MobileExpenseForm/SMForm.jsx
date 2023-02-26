import styled from 'styled-components';

const SMForm = styled.form`
  margin: 20px;
  border: 2px solid;
  border-radius: 4px;

  padding: 25px 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 5vw;

  & label {
    display: flex;
    flex-direction: column;
    gap: 3px;

    & input, select {
      width: 100%;
    }

    & input, select, textarea {
      border: 2px solid ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.background};
      border-radius: 4px;
      outline: none;
      padding: 3px 3px;
      resize: none;
      color: ${({ theme }) => theme.colors.primary};
    }

    & select {
      height: 25px;
    }
  }

  & label:nth-child(5) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export default SMForm;
