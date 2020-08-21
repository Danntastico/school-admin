import React, { useEffect } from "react";
import { useParams } from "@reach/router";
import { Headbar } from "../components/Headbar";
import { informationFields } from "../utils/fieldsList";

import { CardContainer } from "../styles/CardContainer";
import { useSelector, useDispatch } from "react-redux";
import { STUDENT_PATH, COURSE_PATH } from "../utils/constants";
import {
  startPutItem,
  startGetItemById,
  startGetAllItems,
} from "../store/middlewares";
import { ModalContainer } from "../containers/ModalContainer";
import { useModal } from "../hooks/useModal";

import { useInput } from "../hooks/useInput";
import { getStudentActiveCourses } from "../store/actions/crudActions";
import { InformationCard } from "../components/InformationCard";
import { List } from "../components/List";

export const StudentDetails = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    age: 0,
    address: "",
  };
  const { id } = useParams();
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.root);
  const [isModalOpen, openModal, closeModal] = useModal();
  const [values, handleInputChange, reset] = useInput(initialState);

  useEffect(() => {
    dispatch(getStudentActiveCourses(Number.parseInt(id)));
    dispatch(startGetItemById(STUDENT_PATH, id));
    dispatch(startGetAllItems(COURSE_PATH));
  }, [id]);

  const { activeStudent } = students;
  const { firstName, lastName, age, address } = activeStudent;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startPutItem(STUDENT_PATH, id, values));
    closeModal();
    reset();
  };

  if (!activeStudent) {
    return (
      <>
        <Headbar title="Student Details" />
        <div className="pageContent">
          <CardContainer>
            <h1>Please, go back and select an item from the list</h1>
          </CardContainer>
        </div>
      </>
    );
  }

  return (
    <>
      <Headbar title="Student Details" />
      <div className="pageContent">
        <CardContainer>
          <InformationCard
            isEditable
            handleClickOnEdit={openModal}
            title="Student Information"
          >
            {
              <>
                <div>
                  <h3>FirstName</h3> <p>{firstName}</p>
                </div>
                <div>
                  <h3>lastName</h3> <p>{lastName}</p>
                </div>
                <div>
                  <h3>Age</h3> <p>{age}</p>
                </div>
                <div>
                  <h3>address</h3> <p>{address}</p>
                </div>
              </>
            }
          </InformationCard>
          <List title="Registered Courses" buttonLabel="add course"></List>
        </CardContainer>
      </div>

      <ModalContainer
        initialState={initialState}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        fields={informationFields}
      ></ModalContainer>
    </>
  );
};
