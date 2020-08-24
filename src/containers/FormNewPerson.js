import React from "react";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { Button } from "../components/common/Button";

export const FormNewPerson = ({
  fields,
  PATH,
  values,
  handleInputChange,
  handleClickCancelForm,
  handleSubmit,
}) => {
  return (
    <Form onSumit={handleSubmit} title={`Register a new ${PATH}`}>
      {fields.map((i) => (
        <Field
          key={i.name}
          value={values[i.value]}
          handleInputChange={handleInputChange}
          {...i}
        />
      ))}
      {
        <>
          <Button type="submit" label="submit" />
          ·
          <Button onClick={handleClickCancelForm} label="cancel" />
        </>
      }
    </Form>
  );
};
