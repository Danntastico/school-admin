import React, { useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { personInformationFields } from "../utils/fieldsList";
import { CardContainer } from "../styles/CardContainer";
import { TEACHER_PATH } from "../utils/constants";
import { ModalContainer } from "../containers/ModalContainer";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllItems } from "../store/middlewares";
import { ListOfItems } from "../containers/ListOfItems";
import { useInput } from "../hooks/useInput";
import { FormNewPerson } from "../containers/FormNewPerson";

export const Teachers = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const { teachers } = useSelector((state) => state.root);
  const { data } = teachers;
  const dispatch = useDispatch();
  const initialState = {
    name: "",
    lastName: "",
    age: 0,
    address: "",
  };

  const [values, handleInputChange, reset] = useInput(initialState);

  useEffect(() => {
    dispatch(startGetAllItems(TEACHER_PATH));
  }, [dispatch]);

  const handleCloseModal = () => {
    closeModal();
    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Headbar title="Teacher View" />
      <div className="pageContent">
        <CardContainer>
          <ListOfItems data={data} openModal={openModal} PATH={TEACHER_PATH} />
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
