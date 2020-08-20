import React, { useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { informationFields } from "../utils/fieldsList";
import { CardContainer } from "../styles/CardContainer";
import { TEACHER_PATH } from "../utils/constants";
import { ModalContainer } from "../containers/ModalContainer";
import { AddItemForm } from "../containers/AddItemForm";
import { ListOfTeachers } from "../containers/ListOfTeachers";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllItems } from "../store/middlewares";

export const Teachers = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const { data } = useSelector((state) => state[TEACHER_PATH]);
  const dispatch = useDispatch();
  const initialState = {
    name: "",
    lastName: "",
    age: 0,
    address: "",
  };

  useEffect(() => {
    dispatch(startGetAllItems(TEACHER_PATH));
  }, [TEACHER_PATH]);

  return (
    <>
      <Headbar title="Teacher View" />
      <div className="pageContent">
        <CardContainer>
          <ListOfTeachers openModal={openModal} data={data} />
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
          handleClick={closeModal}
          isFormActive={isModalOpen}
          deactivateForm={closeModal}
          initialState={initialState}
        />
      </ModalContainer>
    </>
  );
};
