import React from "react";

import { Headbar } from "../components/Headbar";
import { useInput } from "../hooks/useInput";
import { useModal } from "../hooks/useModal";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { Form } from "../components/Form";
import { Field } from "../components/Field";

export const Courses = () => {
  const [values, handleInputChange, reset] = useInput({
    name: "",
  });

  const [isModalOpen, openModal, closeModal] = useModal({ reset });

  const buttons = () => (
    <>
      <Button label="Submit" /> <Button onClick={closeModal} label="Cancel" />
    </>
  );

  const modalComponent = () =>
    isModalOpen && (
      <Modal modalIsOpen={isModalOpen}>
        <Form title="Register a new course">
          <Field
            key={values.name}
            value={values[values.name]}
            handleInputChange={handleInputChange}
            name={values.name}
            inputType="text"
            label="Name"
          />
          {buttons()}
        </Form>
      </Modal>
    );
  return (
    <div>
      <Headbar title="course View" />
      <div className="pageContent"></div>
      {modalComponent()}
    </div>
  );
};
