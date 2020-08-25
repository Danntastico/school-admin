import React, { useEffect, useState } from "react";
import { InformationCard } from "../../components/InformationCard";
import { Item } from "../../components/common/Item";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { startGetAllItems } from "../../store/middlewares";
import { STUDENTCOURSES_PATH, COURSE_PATH } from "../../utils/constants";

export const StudentSubject = ({ id }) => {
  const dispatch = useDispatch();
  const { studentsCourses } = useSelector((state) => state.root);
  const { courses } = useSelector((state) => state.root);
  const { data: studentCoursesList } = studentsCourses;
  const { data: allCourses } = courses;
  const [studentCourses, setStudentCourses] = useState(allCourses);

  useEffect(() => {
    dispatch(startGetAllItems(STUDENTCOURSES_PATH));
    dispatch(startGetAllItems(COURSE_PATH));
  }, [dispatch]);

  useEffect(() => {
    setStudentCourses(
      studentCoursesList.filter((i) => i.id_student === Number.parseInt(id))
    );
  }, [studentCoursesList, id]);

  const getNameById = (dataList = [], id_course) => {
    return !!dataList && dataList.find((i) => i.id === id_course).name;
  };

  const colorIfAprooved = (calification) =>
    calification >= 3.0 ? "#CFFFD4" : "#FFCFCF";

  return (
    <InformationCard title="Subjects">
      <>
        {studentCourses ? (
          studentCourses.length !== 0 &&
          studentCourses.map((course) => (
            <Item bgColor={colorIfAprooved(course.calification)}>
              <p> {getNameById(allCourses, course.id_course)}</p>
              <p> {course.calification}</p>
            </Item>
          ))
        ) : (
          <Loader type="Circles" color="#f5cb5c" height={80} width={80} />
        )}
      </>
    </InformationCard>
  );
};
