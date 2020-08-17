import React from "react";
import { Link } from "@reach/router";
import { Headbar } from "../components/Headbar";
import { DETAIL_STUDENT_PATH } from "../utils/constants";
import { ModalContainer } from "../components/ModalContainer";
import { informationFields } from "../utils/fieldsList";
import { Field } from "../components/Field";
import { Form } from "../components/Form";
import { Button } from "../components/Button";
import { useModal } from "../hooks/useModal";
import { useInput } from "../hooks/useInput";

export const Students = () => {
  const [values, handleInputChange, reset] = useInput({
    name: "",
    lastName: "",
    age: 0,
    address: "",
    cellphone: "",
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
        <Form title="Register a new teacher">
          {informationFields.map((field) => (
            <Field
              key={field.name}
              value={values[field.name]}
              handleInputChange={handleInputChange}
              {...field}
            />
          ))}
          {buttons()}
        </Form>
      </ModalContainer>
    );

  return (
    <div>
      <Headbar title="Student View" />
      <div className="pageContent"></div>
      {modalComponent()}
    </div>
  );
};
