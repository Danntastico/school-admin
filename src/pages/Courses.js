import React from "react";

import { Headbar } from "../components/Headbar";
import { useInput } from "../hooks/useInput";
import { useModal } from "../hooks/useModal";
import { Button } from "../components/Button";
import { ModalContainer } from "../components/ModalContainer";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { List } from "../components/List";
import { CardContainer } from "../styles/CardContainer";

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
      <ModalContainer modalIsOpen={isModalOpen}>
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
      </ModalContainer>
    );
  return (
    <div>
      <Headbar title="course View" />
      <div className="pageContent">
        <CardContainer>
          <List
            title="Active courses"
            buttonLabel="Add New course"
            handleAddItem={openModal}
          ></List>
        </CardContainer>
      </div>
      {modalComponent()}
    </div>
  );
};
