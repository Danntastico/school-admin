import React, { useEffect, useState } from "react";
import { InformationCard } from "../../components/InformationCard";
import { Item } from "../../components/common/Item";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { startGetAllItems } from "../../store/middlewares";
import { STUDENTCOURSES_PATH } from "../../utils/constants";

export const StudentSubject = ({ id }) => {
  const dispatch = useDispatch();
  const { studentsCourses } = useSelector((state) => state.root);
  const { data: coursesList } = studentsCourses;
  const [studentCourses, setStudentCourses] = useState(null);

  useEffect(() => {
    dispatch(startGetAllItems(STUDENTCOURSES_PATH));
  }, [dispatch]);
  console.log(studentCourses);
  useEffect(() => {
    setStudentCourses(
      coursesList.filter((i) => i.id_student === Number.parseInt(id))
    );
  }, [coursesList, id]);
  return (
    <InformationCard title="Subjects">
      <>
        {/* {studentCourses ? (
          studentCourses.length !== 0 &&
          studentCourses.map((course) => (
            <Item>
              <p> {course.name}</p>
              <p> {new Date(course.year).getFullYear()}</p>
            </Item>
          ))
        ) : (
          <Loader type="Circles" color="#f5cb5c" height={80} width={80} />
        )} */}
      </>
    </InformationCard>
  );
};
