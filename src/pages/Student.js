import React, { useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { informationFields } from "../utils/fieldsList";
import { useModal } from "../hooks/useModal";
import { ListOfItems } from "../containers/ListOfItems";
import { STUDENT_PATH } from "../utils/constants";
import { CardContainer } from "../styles/CardContainer";
import { ModalContainer } from "../containers/ModalContainer";
import { useDispatch } from "react-redux";
import { postNewItem } from "../store/middlewares";
export const Students = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const initialState = {
    name: "",
    lastName: "",
    age: 0,
    address: "",
    cellphone: "",
  };
  const dispatch = useDispatch();
  const postItem = {
    firstName: "Joooohn",
    lastName: "Doe",
    age: 14,
    address: "cra234",
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
      />
    </>
  );
};
