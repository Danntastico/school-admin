import React from "react";
import { ItemList } from "./styles";

export const Item = ({ children, bgColor, txtColor, to }) => (
  <ItemList to={to} bgcolor={bgColor} txtcolor={txtColor}>
    {children}
  </ItemList>
);
