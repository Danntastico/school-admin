import React, { useEffect } from "react";
import { useParams } from "@reach/router";
import { Headbar } from "../components/Headbar";
import { informationFields } from "../utils/fieldsList";

import { CardContainer } from "../styles/CardContainer";
import { useSelector, useDispatch } from "react-redux";
import { STUDENT_PATH } from "../utils/constants";
import { startGetItemById, startPutItem } from "../store/middlewares";
import { ItemDetails } from "../containers/ItemDetails";
import { ModalContainer } from "../containers/ModalContainer";
import { useModal } from "../hooks/useModal";
import { AddItemForm } from "../containers/AddItemForm";
import { EditItemForm } from "../containers/EditItemForm";
import { useInput } from "../hooks/useInput";

export const StudentDetails = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    age: 0,
    address: "",
  };

  const { id } = useParams();
  const { targetItem } = useSelector((state) => state.students);
  const { firstName, lastName, age, address } = targetItem;
  const dispatch = useDispatch();
  const [isModalOpen, openModal, closeModal] = useModal();
  const [values, handleInputChange, reset] = useInput(initialState);

  useEffect(() => {
    dispatch(startGetItemById(STUDENT_PATH, id));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startPutItem(STUDENT_PATH, id, values));
    closeModal();
    reset();
  };

  return (
    <>
      <Headbar title="Student Details" />
      <div className="pageContent">
        <CardContainer>
          <>
            <ItemDetails
              contentInfo={{ firstName, lastName, age, address }}
              handleClickOnEdit={openModal}
            />
          </>
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
