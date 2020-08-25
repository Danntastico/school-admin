import styled from "styled-components";

export const FormHeader = styled.div`
  align-items: center;
  display: flex;
  height: 85px;
  padding-left: 30px;
  width: 100%;
  border-bottom: 1px solid var(--secondary-color);
`;

export const FormTitle = styled.h2`
  color: var(--secondary-color);
  font-size: 20px;
  font-weight: 200;
`;

export const FormBody = styled.div`
  padding: 0 10px;
  margin: 20px 0;
`;

export const FormFooter = styled.div`
  padding: 0 10px;
  align-items: center;
`;

export const EditBtn = styled.button`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 10px;
  border-radius: 20px;
  margin-left: 20px;
  transition: 0.4s;
  :hover {
    transform: translate(0, -5px);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.19);
    background-color: var(--dark-color);
    color: var(--yellow-color);
  }
`;
