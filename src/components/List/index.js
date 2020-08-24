import React from "react";
import { Button } from "../common/Button";
import { ListHeader, ListBody, DivList } from "./styles";
export const List = ({ children, title, buttonLabel, handleOnBtnClick }) => {
  return (
    <DivList>
      <ListHeader>
        <h2> {title} </h2>
        <Button label={buttonLabel} onClick={handleOnBtnClick} />
      </ListHeader>
      <ListBody>{children}</ListBody>
    </DivList>
  );
};
