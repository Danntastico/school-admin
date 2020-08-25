import React, { useEffect, useState } from "react";
import { InformationCard } from "../../components/InformationCard";
import { Item } from "../../components/common/Item";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllItems } from "../../store/middlewares";
import { STUDENTCOURSES_PATH, STUDENT_PATH } from "../../utils/constants";

export const CoursingStudents = ({ id }) => {
  const dispatch = useDispatch();
  const { studentsCourses } = useSelector((state) => state.root);
  const { students } = useSelector((state) => state.root);

  const { data: studentsCoursesList } = studentsCourses;
  const { data: allStudents } = students;

  const [studentCourses, setStudentCourses] = useState(studentsCoursesList);

  useEffect(() => {
    dispatch(startGetAllItems(STUDENTCOURSES_PATH));
    dispatch(startGetAllItems(STUDENT_PATH));
  }, [dispatch]);

  useEffect(() => {
    setStudentCourses(
      studentsCoursesList.filter((i) => i.id_course === Number.parseInt(id))
    );
  }, [studentsCoursesList, id]);

  const colorIfAprooved = (calification) =>
    calification >= 3.0 ? "#CFFFD4" : "#FFCFCF";

  return (
    <InformationCard title="Active Students">
      <>
        {studentCourses ? (
          allStudents.length !== 0 &&
          studentCourses.map((course) => (
            <Item bgColor={colorIfAprooved(course.calification)}>
              <p> {course.id_student}</p>
              <p>
                {allStudents.find((i) => i.id === course.id_student).firstName}
              </p>
              <p>
                {allStudents.find((i) => i.id === course.id_student).lastName}
              </p>
            </Item>
          ))
        ) : (
          <Loader type="Circles" color="#f5cb5c" height={80} width={80} />
        )}
      </>
    </InformationCard>
  );
};
