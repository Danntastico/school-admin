import React, { useEffect, useState } from "react";
import { InformationCard } from "../../components/InformationCard";
import { Item } from "../../components/common/Item";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  startGetAllItems,
  startPostItem,
  startDeleteItem,
} from "../../store/middlewares";
import { STUDENTCOURSES_PATH, COURSE_PATH } from "../../utils/constants";
import { useModal } from "../../hooks/useModal";
import { ModalContainer } from "../ModalContainer";
import { Form } from "../../components/common/Form";
import { Field } from "../../components/common/Field";
import { useInput } from "../../hooks/useInput";
import { Button } from "../../components/common/Button";
import { assignSubjectToStudent } from "../../utils/fieldsList";
import Swal from "sweetalert2";

export const StudentSubject = ({ id }) => {
  const dispatch = useDispatch();
  const { studentsCourses } = useSelector((state) => state.root);
  const { courses } = useSelector((state) => state.root);
  const { data: studentCoursesList } = studentsCourses;
  const { data: allCourses } = courses;
  const [studentCourses, setStudentCourses] = useState(studentCoursesList);
  const [isModalOpen, openModal, closeModal] = useModal();
  const [values, handleInputChange, reset] = useInput({
    id_course: "",
    calification: 0,
  });

  useEffect(() => {
    dispatch(startGetAllItems(STUDENTCOURSES_PATH));
    dispatch(startGetAllItems(COURSE_PATH));
  }, [dispatch]);

  useEffect(() => {
    setStudentCourses(
      studentCoursesList.filter((i) => i.id_student === Number.parseInt(id))
    );
  }, [studentCoursesList, id]);

  const colorIfAprooved = (calification) =>
    calification >= 3.0 ? "#CFFFD4" : "#FFCFCF";

  const handleSubmitAssignCourse = (e) => {
    e.preventDefault();
    if (studentCourses.some((i) => i.id_course == values.id_course)) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "❌❌Select Other!❌❌",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      dispatch(
        startPostItem(STUDENTCOURSES_PATH, { ...values, id_student: id })
      );
      closeModal();
      reset();
    }
  };

  const handleCloseModal = () => {
    closeModal();
    reset();
  };

  const handleDeleteCourse = (id) => {
    dispatch(startDeleteItem(STUDENTCOURSES_PATH, id));
  };

  const handleClickDeleteStudent = () => {};

  return (
    <InformationCard title="Subjects" hasBtn handleOnClick={openModal}>
      <>
        {studentCourses ? (
          allCourses.length !== 0 &&
          studentCourses.map((course) => (
            <Item
              bgColor={colorIfAprooved(course.calification)}
              onClick={() => handleDeleteCourse(course.id)}
            >
              <p> {allCourses.find((i) => i.id === course.id_course).name}</p>
              <p> {course.calification}</p>
            </Item>
          ))
        ) : (
          <Loader type="Circles" color="#f5cb5c" height={80} width={80} />
        )}
      </>
      <ModalContainer isModalOpen={isModalOpen} closeModal={closeModal}>
        <Form title="Assign Subject" onSubmit={handleSubmitAssignCourse}>
          <>
            {assignSubjectToStudent.map((i) =>
              i.fieldType === "select" ? (
                <Field
                  key={i.name}
                  value={values[i.name]}
                  handleInputChange={handleInputChange}
                  {...i}
                >
                  <option> </option>
                  {allCourses.map((course) => (
                    <option value={course.id}>
                      {course.id} {course.name}
                      {new Date(course.year).getFullYear()}
                    </option>
                  ))}
                </Field>
              ) : (
                <Field
                  key={i.name}
                  value={values[i.value]}
                  handleInputChange={handleInputChange}
                  {...i}
                />
              )
            )}
          </>
          <>
            <Button type="submit" label="Assign" />
            <Button onClick={handleCloseModal} label="Cancel" />
          </>
        </Form>
      </ModalContainer>
      {studentCourses.length === 0 && (
        <button onClick={handleClickDeleteStudent} className="absoluteBtn">
          DELETE STUDENT
        </button>
      )}
    </InformationCard>
  );
};
