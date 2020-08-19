import React, { useEffect } from "react";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { useInput } from "../hooks/useInput";
import { Button } from "../components/Button";
import { useDispatch } from "react-redux";
import { postNewItem } from "../store/middlewares";

export const AddItemForm = ({
  title,
  fields,
  initialState,
  handleClick,
  isFormActive,
  ITEM_TYPE,
  deactivateForm,
}) => {
  const [values, handleInputChange, reset] = useInput(initialState);
  const dispatch = useDispatch();
  const buttons = () => (
    <>
      <Button label="Submit" /> <Button onClick={handleClick} label="Cancel" />
    </>
  );

  useEffect(() => {
    !isFormActive && reset();
  }, [isFormActive]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewItem(ITEM_TYPE, values));
    deactivateForm();
  };

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
