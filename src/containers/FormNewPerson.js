import React from "react";
import { Form } from "../components/common/Form";
import { Field } from "../components/common/Field";
import { Button } from "../components/common/Button";

export const FormNewPerson = ({
  fields,
  formTitle,
  values,
  handleInputChange,
  handleClickCancelForm,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit} title={formTitle}>
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
