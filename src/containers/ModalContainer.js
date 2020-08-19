import React, { useEffect } from "react";
import { Modal } from "../components/Modal";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { useInput } from "../hooks/useInput";
import { Button } from "../components/Button";

export const ModalContainer = ({
  isModalOpen,
  closeModal,
  fields = [],
  initialState,
}) => {
  const [values, handleInputChange, reset] = useInput(initialState);

  useEffect(() => {
    if (!isModalOpen) {
      reset();
    }
  }, [isModalOpen]);

  const buttons = () => (
    <>
      <Button label="Submit" /> <Button onClick={closeModal} label="Cancel" />
    </>
  );
  return (
    isModalOpen && (
      <Modal modalIsOpen={isModalOpen}>
        <Form title="Register a new teacher">
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
      </Modal>
    )
  );
};
