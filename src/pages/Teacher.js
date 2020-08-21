import React, { useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { informationFields } from "../utils/fieldsList";
import { CardContainer } from "../styles/CardContainer";
import { TEACHER_PATH } from "../utils/constants";
import { ModalContainer } from "../containers/ModalContainer";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllItems } from "../store/middlewares";
import { ListOfItems } from "../containers/ListOfItems";
import { useInput } from "../hooks/useInput";

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

  return (
    <>
      <Headbar title="Teacher View" />
      <div className="pageContent">
        <CardContainer>
          <ListOfItems data={data} openModal={openModal} PATH={TEACHER_PATH} />
        </CardContainer>
      </div>
      <ModalContainer
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        fields={informationFields}
      ></ModalContainer>
    </>
  );
};
