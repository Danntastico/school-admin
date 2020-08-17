import React from "react";
import { TableMain, TableHead, TableBody } from "./styles";

export const Table = ({ headLabels = [], children }) => {
  return (
    <>
      <TableMain>
        <TableHead>
          <tr>
            {headLabels.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </TableHead>
        <TableBody>{children}</TableBody>
      </TableMain>
    </>
  );
};
