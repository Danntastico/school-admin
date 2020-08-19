import styled from "styled-components";

export const TableRow = styled.tr`
  text-align: center;
  background-color: ${(props) => props.bgColor || "#fffff"};
  height: 50px;
  transition: 0.4s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    border: 1px solid var(--secondary-color);
    transition: 0.8s;
    font-weight: bold;
  }
`;
