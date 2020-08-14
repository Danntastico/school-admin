import React from 'react';
import { Input, Label, FieldContainer } from './styles';
export const Field = ({
  disabled = false,
  fieldType,
  handleInputChange,
  inputType,
  label,
  name,
  placeholder,
  value,
}) => {
  return (
    <FieldContainer>
      <Label htmlFor={name}> {label}</Label>
      {(() => {
        switch (fieldType) {
          case 'textarea':
            return (
              <textarea
                autoComplete='off'
                disabled={disabled}
                name={name}
                id={name}
                onChange={handleInputChange}
                value={value}
              />
            );
          default:
            return (
              <Input
                autoComplete='off'
                disabled={disabled}
                id={name}
                name={name}
                onChange={handleInputChange}
                placeholder={placeholder}
                type={inputType}
                value={value}
              />
            );
        }
      })()}
    </FieldContainer>
  );
};
