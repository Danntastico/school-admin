import React from "react";
import { TableMain, TableHead } from "./styles";

export const Table = ({ headLabels = [], children }) => {
  return (
    <>
      <TableMain>
        <TableHead>
          {headLabels.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </TableHead>
        {children}
      </TableMain>
    </>
  );
};
