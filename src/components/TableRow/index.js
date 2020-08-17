import React from "react";

export const TableRow = ({ children }) => {
  return (
    <tr>
      {children} <Button />
    </tr>
  );
};
