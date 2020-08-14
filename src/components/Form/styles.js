import styled from 'styled-components';

export const FormHeader = styled.div`
  align-items: center;
  background: rgb(83, 43, 114);
  background: -moz-linear-gradient(
    90deg,
    rgba(83, 43, 114, 1) 25%,
    rgba(66, 35, 91, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(83, 43, 114, 1) 25%,
    rgba(66, 35, 91, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(83, 43, 114, 1) 25%,
    rgba(66, 35, 91, 1) 100%
  );

  display: flex;
  height: 100px;
  padding-left: 30px;
`;

export const FormTitle = styled.h2`
  color: white;
  font-weight: 100;
`;

export const FormBody = styled.div`
  padding: 0 30px;
  margin: 20px 0;
`;

export const FormFooter = styled.div`
  padding: 0 30px;
`;
