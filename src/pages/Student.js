import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { STUDENT_PATH } from "../utils/constants";
import { CardContainer } from "../styles/CardContainer";
import { startPostItem, startGetAllItems } from "../store/middlewares";
import { useInput } from "../hooks/useInput";
import { ListOfItems } from "../containers/ListOfItems";
import { ModalContainer } from "../containers/ModalContainer";
import { FormNewPerson } from "../containers/FormNewPerson";
import { personInformationFields } from "../utils/fieldsList";

const initialState = {
  firstName: "",
  lastName: "",
  age: 0,
  address: "",
};
export const Students = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.root);
  const { data } = students;
  const [isModalOpen, openModal, closeModal] = useModal();
  const [values, handleInputChange, reset] = useInput(initialState);

  useEffect(() => {
    dispatch(startGetAllItems(STUDENT_PATH));
  }, [dispatch]);

  const handleCloseModal = () => {
    closeModal();
    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(startPostItem(STUDENT_PATH, values));
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
      <ModalContainer isModalOpen={isModalOpen} closeModal={closeModal}>
        <FormNewPerson
          values={values}
          initialState={data}
          fields={personInformationFields}
          handleInputChange={handleInputChange}
          handleClickCancelForm={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      </ModalContainer>
    </>
  );
};
