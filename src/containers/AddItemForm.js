import React, { useEffect } from "react";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { Button } from "../components/Button";

export const AddItemForm = ({
  title,
  fields,
  values,
  handleInputChange,
  handleClick,
  isFormActive,
  handleSubmit,
  reset,
}) => {
  useEffect(() => {
    !isFormActive && reset();
  }, [isFormActive]);

  return (
    <Form title={title} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Field
          key={field.name}
          value={values[field.name]}
          handleInputChange={handleInputChange}
          {...field}
        />
      ))}
      {
        <>
          <Button label="Submit" />
          <Button onClick={handleClick} label="Cancel" />
        </>
      }
    </Form>
  );
};
