import React from "react";
import { Headbar } from "../components/Headbar";
import { informationFields } from "../utils/fieldsList";
import { useModal } from "../hooks/useModal";
import { ListOfItems } from "../containers/ListOfItems";
import { STUDENT_PATH } from "../utils/constants";
import { CardContainer } from "../styles/CardContainer";
import { ModalContainer } from "../containers/ModalContainer";
import { AddItemForm } from "../containers/AddItemForm";
import { useDispatch } from "react-redux";
import { startPostItem } from "../store/middlewares";
import { useInput } from "../hooks/useInput";
export const Students = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const initialState = {
    firstName: "",
    lastName: "",
    age: 0,
    address: "",
  };
  const [values, handleInputChange, reset] = useInput(initialState);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startPostItem(STUDENT_PATH, values));
    closeModal();
    reset();
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
          initialState={initialState}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          reset={reset}
          values={values}
        />
      </ModalContainer>
    </>
  );
};
