import React, { useEffect } from "react";

import { Headbar } from "../components/Headbar";
import { useModal } from "../hooks/useModal";
import { ModalContainer } from "../containers/ModalContainer";
import { CardContainer } from "../styles/CardContainer";
import { ListOfItems } from "../containers/ListOfItems";
import { COURSE_PATH } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllItems } from "../store/middlewares";

export const Courses = () => {
  const { courses } = useSelector((state) => state.root);
  const { data } = courses;
  const dispatch = useDispatch();
  console.log(data);
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
  useEffect(() => {
    dispatch(startGetAllItems(COURSE_PATH));
  }, [dispatch]);

  return (
    <div>
      <Headbar title="course View" />
      <div className="pageContent">
        <CardContainer>
          <ListOfItems data={data} openModal={openModal} PATH={COURSE_PATH} />
        </CardContainer>
      </div>
      <ModalContainer
        initialState={initialState}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        fields={courseFields}
      ></ModalContainer>
    </div>
  );
};
