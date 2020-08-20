import React, { useEffect } from "react";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { useInput } from "../hooks/useInput";
import { Button } from "../components/Button";
import { useDispatch } from "react-redux";
import { startPostItem } from "../store/middlewares";

export const EditItemForm = ({
  title,
  fields,
  initialState,
  handleClick,
  isFormActive,
  ITEM_TYPE,
  deactivateForm,
  handleSubmit,
}) => {
  const [values, handleInputChange, reset] = useInput(initialState);
  const dispatch = useDispatch();

  const buttons = () => (
    <>
      <Button label="Edit Data!" />{" "}
      <Button onClick={handleClick} label="Cancel" />
    </>
  );

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
      {buttons()}
    </Form>
  );
};
