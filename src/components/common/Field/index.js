import React from "react";
import { Input, Label, FieldContainer } from "./styles";
export const Field = ({
  disabled = false,
  fieldType,
  handleInputChange,
  inputType,
  label,
  name,
  placeholder,
  value,
  children,
  min,
  max,
}) => {
  const fieldRender = () => {
    switch (fieldType) {
      case "textarea":
        return (
          <textarea
            autoComplete="off"
            disabled={disabled}
            name={name}
            id={name}
            onChange={handleInputChange}
            value={value}
          />
        );
      case "select":
        return (
          <select
            name={name}
            value={value}
            required={true}
            onChange={handleInputChange}
          >
            {children}
          </select>
        );
      default:
        return (
          <Input
            autoComplete="off"
            disabled={disabled}
            id={name}
            name={name}
            onChange={handleInputChange}
            placeholder={placeholder}
            type={inputType}
            value={value}
            step="0.01"
            required={true}
            min={min}
            max={max}
          />
        );
    }
  };
  return (
    <FieldContainer>
      <Label htmlFor={name}> {label}</Label>
      {fieldRender()}
    </FieldContainer>
  );
};
