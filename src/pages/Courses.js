import React, { useEffect } from "react";

import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { ModalContainer } from "../containers/ModalContainer";
import { CardContainer } from "../styles/CardContainer";
import { ListOfItems } from "../containers/ListOfItems";
import { COURSE_PATH, CLEAR_ACTIVE_COURSE } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllItems } from "../store/middlewares";
import { courseFields } from "../utils/fieldsList";
import { useInput } from "../hooks/useInput";
import { FormNewCourse } from "../containers/FormNewCourse";
import { clearActiveItem } from "../store/actions/crudActions";

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
    dispatch(clearActiveItem(CLEAR_ACTIVE_COURSE));
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
        <FormNewCourse
          fields={courseFields}
          PATH={COURSE_PATH}
          values={values}
          handleInputChange={handleInputChange}
          handleClickCancelForm={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      </ModalContainer>
    </div>
  );
};
