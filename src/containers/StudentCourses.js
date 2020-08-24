import React, { useEffect, useState } from "react";
import { Button } from "../components/common/Button";
import { List } from "../components/List";
import { Item } from "../components/Item";
import { useModal } from "../hooks/useModal";
import { ModalContainer } from "./ModalContainer";
import { AddItemForm } from "./AddItemForm";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { useSelector, useDispatch } from "react-redux";
import { useInput } from "../hooks/useInput";
import { startGetAllItems, startPostItem } from "../store/middlewares";
import { COURSE_PATH, STUDENTCOURSES_PATH } from "../utils/constants";
const assiggnationFields = [
  {
    name: "id_course",
    fieldType: "select",
    label: "Aviable courses",
  },
  {
    name: "calification",
    label: "Final Calification",
    inputType: "number",
    min: 0,
    max: 5.0,
  },
];

export const StudentCourses = ({ id: id_student }) => {
  const dispatch = useDispatch();
  const { studentsCourses } = useSelector((state) => state.root);
  const { courses } = useSelector((state) => state.root);
  const [isModalOpen, openModal, closeModal] = useModal();
  const [values, handleInputChange, reset] = useInput({
    id_course: "",
    calification: 0.0,
  });

  const { data: coursesFullList } = courses;
  const { activeStudentCourses } = studentsCourses;
  console.log(coursesFullList);
  const [studentCoursesList, setStudentCoursesList] = useState(
    activeStudentCourses
  );

  useEffect(() => {
    setStudentCoursesList(studentCoursesList);
  }, [activeStudentCourses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startPostItem(STUDENTCOURSES_PATH, { id_student, ...values }));
    reset();
    closeModal();
  };

  const handleClick = () => {
    reset();
    closeModal();
  };

  return (
    <>
      <List
        title="Registered Courses"
        buttonLabel="Add new Course"
        handleOnBtnClick={openModal}
      >
        {!!studentCoursesList &&
          activeStudentCourses.map((studCourse) => (
            <Item key={studCourse.id}>
              <p>
                Course:
                {coursesFullList.find((i) => i.id === studCourse.id).name}
              </p>
              <p>Final: {studCourse.calification}</p>
            </Item>
          ))}
      </List>

      <ModalContainer isModalOpen={isModalOpen} closeModal={closeModal}>
        <Form title="Assign Subject" onSubmit={handleSubmit}>
          {assiggnationFields.map((field) =>
            field.fieldType === "select" ? (
              <Field
                key={field.name}
                value={values[field.name]}
                handleInputChange={handleInputChange}
                {...field}
              >
                <option> </option>
                {coursesFullList.map((course) => (
                  <option value={course.id} key={course.id}>
                    {course.name}
                  </option>
                ))}
              </Field>
            ) : (
              <Field
                key={field.name}
                value={values[field.name]}
                handleInputChange={handleInputChange}
                {...field}
              />
            )
          )}
          {
            <>
              <Button label="Submit" />{" "}
              <Button onClick={handleClick} label="Cancel" />
            </>
          }
        </Form>
      </ModalContainer>
    </>
  );
};
