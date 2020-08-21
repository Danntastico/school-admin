import React, { useEffect } from "react";
import { useParams } from "@reach/router";
import { Headbar } from "../components/Headbar";
import { informationFields } from "../utils/fieldsList";

import { CardContainer } from "../styles/CardContainer";
import { useSelector, useDispatch } from "react-redux";
import { STUDENT_PATH } from "../utils/constants";
import { startPutItem, startGetItemById } from "../store/middlewares";
import { ItemDetails } from "../containers/ItemDetails";
import { ModalContainer } from "../containers/ModalContainer";
import { useModal } from "../hooks/useModal";
import { AddItemForm } from "../containers/AddItemForm";
import { useInput } from "../hooks/useInput";
import { StudentCourses } from "../containers/StudentCourses";

export const StudentDetails = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    age: 0,
    address: "",
  };
  const { id } = useParams();
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.data);
  const [isModalOpen, openModal, closeModal] = useModal();
  const [values, handleInputChange, reset] = useInput(initialState);

  useEffect(() => {
    dispatch(startGetItemById(STUDENT_PATH, id));
  }, [id]);

  const { activeStudent } = students;
  const { firstName, lastName, age, address, courses } = activeStudent;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startPutItem(STUDENT_PATH, id, values));
    closeModal();
    reset();
  };
  if (!activeStudent) {
    return (
      <>
        <Headbar title="Student Details" />
        <div className="pageContent">
          <CardContainer>
            <h1>Please, go back and select an item from the list</h1>
          </CardContainer>
        </div>
      </>
    );
  }
  return (
    <>
      <Headbar title="Student Details" />
      <div className="pageContent">
        <CardContainer>
          <ItemDetails
            contentInfo={{ firstName, lastName, age, address }}
            handleClickOnEdit={openModal}
          />
          <StudentCourses studentCourses={courses} id={id} />
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
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          reset={reset}
          values={values}
        />
      </ModalContainer>
    </>
  );
};
