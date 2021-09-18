import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  .MuiTextField-root,
  .MuiFormControlLabel-root {
    margin-top: 18px;
  }
`;
