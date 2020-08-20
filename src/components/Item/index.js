import React from "react";
import { ItemList } from "./styles";

export const Item = ({ children, bgColor, txtColor, to, onClick }) => (
  <ItemList to={to} bgcolor={bgColor} txtcolor={txtColor} onClick={onClick}>
    {children}
  </ItemList>
);
