import React from "react";
import { Button } from "../Button";
import { ListHeader, ListBody } from "./styles";
export const List = ({ children, title, buttonLabel, handleAddItem }) => {
  return (
    <>
      <ListHeader>
        <h2> {title} </h2>
        <Button label={buttonLabel} onClick={handleAddItem} />
      </ListHeader>
      <ListBody>{children}</ListBody>
    </>
  );
};
