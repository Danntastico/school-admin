import React, { useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { informationFields } from "../utils/fieldsList";
import { useModal } from "../hooks/useModal";
import { STUDENT_PATH } from "../utils/constants";
import { CardContainer } from "../styles/CardContainer";
import { ModalContainer } from "../containers/ModalContainer";
import { AddItemForm } from "../containers/AddItemForm";
import { useDispatch, useSelector } from "react-redux";
import { startPostItem, startGetAllItems } from "../store/middlewares";
import { useInput } from "../hooks/useInput";
import { ListOfItems } from "../containers/ListOfItems";

const initialState = {
  firstName: "",
  lastName: "",
  age: 0,
  address: "",
};
export const Students = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const { students } = useSelector((state) => state.data);
  const { data } = students;
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useInput(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startPostItem(STUDENT_PATH, values));
    closeModal();
    reset();
  };

  useEffect(() => {
    dispatch(startGetAllItems(STUDENT_PATH));
  }, [dispatch]);

  const handleCloseModal = () => {
    closeModal();
    reset();
  };

  return (
    <>
      <Headbar title="Student View" />
      <div className="pageContent">
        <CardContainer>
          <ListOfItems data={data} openModal={openModal} PATH={STUDENT_PATH} />
        </CardContainer>
      </div>

      <ModalContainer
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        fields={informationFields}
      >
        <AddItemForm
          fields={informationFields}
          title="Register New Student"
          handleClick={handleCloseModal}
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
