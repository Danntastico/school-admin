import React from "react";
import { TableRow as TabRow } from "./styles";
export const TableRow = ({ children, inputColor }) => {
  return <TabRow inputColor={inputColor}>{children}</TabRow>;
};
