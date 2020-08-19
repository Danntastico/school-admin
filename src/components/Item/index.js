import React from "react";
import { ItemList } from "./styles";

export const Item = ({ children, backgroundColor, textColor, to }) => (
  <ItemList to={to} backgroundColor={backgroundColor} textColor={textColor}>
    {children}
  </ItemList>
);
