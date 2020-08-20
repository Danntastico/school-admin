import React from "react";
import { Headbar } from "../components/Headbar";
import { informationFields } from "../utils/fieldsList";
import { useModal } from "../hooks/useModal";
import { ListOfItems } from "../containers/ListOfItems";
import { STUDENT_PATH } from "../utils/constants";
import { CardContainer } from "../styles/CardContainer";
import { ModalContainer } from "../containers/ModalContainer";
import { AddItemForm } from "../containers/AddItemForm";
export const Students = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const initialState = {
    firstName: "test",
    lastName: "test",
    age: 123,
    address: "asdasdsa",
    cellphone: 123123,
  };

  return (
    <>
      <Headbar title="Student View" />
      <div className="pageContent">
        <CardContainer>
          <ListOfItems openModal={openModal} PATH={STUDENT_PATH} />
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
          ITEM_TYPE={STUDENT_PATH}
        />
      </ModalContainer>
    </>
  );
};
