import React from "react";
import { Headbar } from "../components/Headbar";
import { Table } from "../components/Table";
import { TableItem } from "../components/TableItem";
import { useInput } from "../hooks/useInput";
import { useModal } from "../hooks/useModal";
import { Button } from "../components/Button";
import { ModalContainer } from "../components/ModalContainer";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { informationFields } from "../utils/fieldsList";

export const Teachers = () => {
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
    <>
      <Headbar title="Teacher View" />
      <div className="pageContent">
        <Table
          title="Active Teachers"
          handleClick={openModal}
          labelButton="Add New Teacher"
        >
          <TableItem />
        </Table>
      </div>
      {modalComponent()}
    </>
  );
};
