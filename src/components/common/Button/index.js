import React from "react";
import { Btn } from "./styles";

export const Button = ({ type, onClick, label = "Button", isDisabled }) => {
  return (
    <Btn onClick={onClick} type={type} disabled={isDisabled}>
      {label}
    </Btn>
  );
};
