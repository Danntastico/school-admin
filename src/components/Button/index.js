import React from "react";
import { Btn } from "./styles";

export const Button = ({ onClick, label = "Button", isDisabled }) => {
  return (
    <Btn onClick={onClick} disabled={isDisabled}>
      {label}
    </Btn>
  );
};
