import React from "react";

import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { ModalContainer } from "../containers/ModalContainer";
import { CardContainer } from "../styles/CardContainer";
import { ListOfItems } from "../containers/ListOfItems";
import { COURSE_PATH, DETAIL_COURSE_PATH } from "../utils/constants";
import { AddCourseForm } from "../containers/AddCourseForm";

export const Courses = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const courseFields = [
    {
      name: "name",
      inputType: "text",
      label: "Name",
    },
    {
      name: "teacher_id",
      fieldType: "select",
      label: "Assign to a Teacher",
    },
  ];
  const initialState = {
    name: "",
    year: new Date(),
    teacher_id: "",
  };

  return (
    <div>
      <Headbar title="course View" />
      <div className="pageContent">
        <CardContainer>
          <ListOfItems
            openModal={openModal}
            PATH={COURSE_PATH}
            isCourse
            DETAIL_PATH={DETAIL_COURSE_PATH}
          />
        </CardContainer>
      </div>
      <ModalContainer
        initialState={initialState}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        fields={courseFields}
      >
        <AddCourseForm
          fields={courseFields}
          title="Register New Student"
          handleClick={closeModal}
          isFormActive={isModalOpen}
          deactivateForm={closeModal}
          initialState={initialState}
          ITEM_TYPE={COURSE_PATH}
        />
      </ModalContainer>
    </div>
  );
};
