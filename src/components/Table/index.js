import React from "react";
import { TableHeader, TableContent } from "./styles";
import { Button } from "../Button";

export const Table = ({
  title = "Items",
  children,
  handleClick,
  labelButton,
}) => {
  return (
    <>
      <TableHeader>
        <h2>{title}</h2>
        <Button onClick={handleClick} label={labelButton}>
          Add New Item
        </Button>
      </TableHeader>
      <TableContent>{children}</TableContent>
    </>
  );
};
