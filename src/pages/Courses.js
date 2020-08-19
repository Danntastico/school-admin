import React from "react";

import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { ModalContainer } from "../containers/ModalContainer";
import { CardContainer } from "../styles/CardContainer";
import { ListOfItems } from "../containers/ListOfItems";
import { COURSE_PATH, DETAIL_COURSE_PATH } from "../utils/constants";

export const Courses = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const courseFields = [
    {
      name: "name",
      inputType: "text",
      label: "Name",
    },
  ];
  const initialState = {
    name: "",
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
      />
    </div>
  );
};
