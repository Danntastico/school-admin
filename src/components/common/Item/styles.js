import styled from "styled-components";

export const ItemList = styled.div`
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  color: ${(props) => props.textColor || "var(--secondary-color)"};
  font-style: normal;
  text-transform: capitalize;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 10px;
  border: 0.5px solid var(--secondary-color);
  margin: 5px 0;
  transition: 0.4s;
  cursor: pointer;
  p {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 2px;
    padding-left: 10px;
  }
  :hover {
    transform: scale(1.03);
  }
`;
