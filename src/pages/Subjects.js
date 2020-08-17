import React from "react";
import { Headbar } from "../components/Headbar";
import { useInput } from "../hooks/useInput";
import { useModal } from "../hooks/useModal";
import { Button } from "../components/Button";
import { ModalContainer } from "../components/ModalContainer";
import { Form } from "../components/Form";
import { Field } from "../components/Field";

export const Subjects = () => {
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
      <ModalContainer modalIsOpen={isModalOpen}>
        <Form title="Register a new Subject">
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
      </ModalContainer>
    );
  return (
    <div>
      <Headbar title="Subject View" />
      <div className="pageContent"></div>
      {modalComponent()}
    </div>
  );
};
