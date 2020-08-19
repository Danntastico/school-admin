import styled from "styled-components";
import { Link } from "@reach/router";
export const ItemList = styled(Link)`
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  color: ${(props) => props.textColor || "var(--secondary-color)"};
`;
