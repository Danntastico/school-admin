import styled from 'styled-components';

export const Input = styled.input`
  border-style: hidden;
  border-bottom: 1px solid #552d73;
  display: block;
  margin: 0px 0 5px;
  outline: none;
  padding: 5px 15px;
  width: 100%;
  transition: 0.4s;
  ::-webkit-input-placeholder {
    /* Edge */
    color: #b8b8b8;
    font-style: italic;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #b8b8b8;
    font-style: italic;
  }

  ::placeholder {
    color: #b8b8b8;
    font-style: italic;
  }

  :hover {
    padding-left: 5px;
  }
`;

export const Label = styled.label`
  color: #552d73;
  padding-left: 30px;
  transition: 0.4s;
`;

export const FieldContainer = styled.div`
  :not(:first-child) {
    margin-top: 20px;
  }
  :hover ${Label} {
    padding-left: 0;
    transition: 0.4s;
  }
`;
