import styled from "styled-components";

export const Btn = styled.button`
  color: var(--secondary-color);
  background-color: ${(props) => props.inputColor || "var(--yellow-color)"};
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  height: 42px;
  text-transform: uppercase;
  min-width: 176px;
  transition: 0.4s;
  opacity: 0.9;
  cursor: pointer;
  :hover {
    transform: translate(0, -5px);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.19);
  }
  &[disabled] {
    opacity: 0.4;
  }
`;
