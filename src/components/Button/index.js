import React from "react";
import { Btn } from "./styles";
import PropTypes from "prop-types";

export const Button = ({ onClick, label = "Button", isDisabled }) => {
  return (
    <Btn onClick={onClick} disabled={isDisabled}>
      {label}
    </Btn>
  );
};
