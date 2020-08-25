import React from "react";
import { ItemList } from "./styles";

export const Item = ({ children, bgColor, txtColor, to, onClick }) => (
  <ItemList bgColor={bgColor} txtcolor={txtColor} onClick={onClick}>
    {children}
  </ItemList>
);
