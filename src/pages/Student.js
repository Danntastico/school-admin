import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { STUDENT_PATH } from "../utils/constants";
import { CardContainer } from "../styles/CardContainer";
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
  const { students } = useSelector((state) => state.root);
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
    </>
  );
};
