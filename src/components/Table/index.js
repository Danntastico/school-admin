import React from "react";
import { TableDescription, TableContent } from "./styles";
import { Button } from "../Button";

export const Table = ({ children }) => {
  return (
    <>
      {/* <TableDescription>
        <h2>{title}</h2>
        <Button onClick={handleClick} label={labelButton}>
          Add New Item
        </Button>
      </TableDescription>
      <TableContent>{children}</TableContent> */}
      <TableDescription>{children[0]}</TableDescription>
      <TableContent>{children[1]}</TableContent>
    </>
  );
};
