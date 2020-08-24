import React, { useState, useEffect } from "react";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { Button } from "../components/Button";
import { useInput } from "../hooks/useInput";

export const PersonDetails = ({
  fields,
  handleSubmit,
  PATH,
  values,
  handleClickCancelForm,
  handleInputChange
}) => {


  return (


    <>
      <Form  onSumit={handleSubmit} isEditable title={`Register a new ${PATH}`}>
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
    </>
  );
};
