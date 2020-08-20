import React from "react";
import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { informationFields } from "../utils/fieldsList";
import { CardContainer } from "../styles/CardContainer";
import { ListOfItems } from "../containers/ListOfItems";
import { TEACHER_PATH } from "../utils/constants";
import { ModalContainer } from "../containers/ModalContainer";
import { AddItemForm } from "../containers/AddItemForm";

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
      >
        <AddItemForm
          fields={informationFields}
          title="Register New Student"
          handleClick={closeModal}
          isFormActive={isModalOpen}
          deactivateForm={closeModal}
          initialState={initialState}
          ITEM_TYPE={TEACHER_PATH}
        />
      </ModalContainer>
    </>
  );
};
