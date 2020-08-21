import React, { useEffect } from "react";

import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { ModalContainer } from "../containers/ModalContainer";
import { CardContainer } from "../styles/CardContainer";
import { ListOfItems } from "../containers/ListOfItems";
import { COURSE_PATH } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllItems } from "../store/middlewares";
import { courseFields } from "../utils/fieldsList";
import { FormNewPerson } from "../containers/FormNewPerson";
import { useInput } from "../hooks/useInput";

export const Courses = () => {
  const { courses } = useSelector((state) => state.root);
  const { data } = courses;
  const dispatch = useDispatch();
  const [isModalOpen, openModal, closeModal] = useModal();

  const initialState = {
    name: "",
    year: new Date(),
    teacher_id: "",
  };

  const [values, handleInputChange, reset] = useInput(initialState);

  useEffect(() => {
    dispatch(startGetAllItems(COURSE_PATH));
  }, [dispatch]);
  const handleCloseModal = () => {
    closeModal();
    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Headbar title="course View" />
      <div className="pageContent">
        <CardContainer>
          <ListOfItems data={data} openModal={openModal} PATH={COURSE_PATH} />
        </CardContainer>
      </div>
      <ModalContainer initialState={initialState} isModalOpen={isModalOpen}>
        <FormNewPerson
          values={values}
          initialState={data}
          fields={courseFields}
          handleInputChange={handleInputChange}
          handleClickCancelForm={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      </ModalContainer>
    </div>
  );
};
