import React from "react";
import { Headbar } from "../components/Headbar";
import { useInput } from "../hooks/useInput";
import { useModal } from "../hooks/useModal";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { informationFields } from "../utils/fieldsList";
import { CardContainer } from "../styles/CardContainer";
import { ListOfItems } from "../containers/ListOfItems";
import { TEACHER_PATH } from "../utils/constants";
import { ModalContainer } from "../containers/ModalContainer";

export const Teachers = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const initialState = {
    name: "",
    lastName: "",
    age: 0,
    address: "",
    cellphone: "",
  };

  return (
    <>
      <Headbar title="Teacher View" />
      <div className="pageContent">
        <CardContainer>
          <ListOfItems openModal={openModal} PATH={TEACHER_PATH} />
        </CardContainer>
      </div>
      <ModalContainer
        initialState={initialState}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        fields={informationFields}
      />
    </>
  );
};
