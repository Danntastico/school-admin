import React, { useState, useEffect } from "react";
import { InformationCard } from "../../components/InformationCard";
import { Item } from "../../components/common/Item";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

export const TeacherSubjects = ({ id }) => {
  const { courses } = useSelector((state) => state.root);
  const { data: coursesList } = courses;
  const [teacherCourses, setTeacherCourses] = useState(null);

  useEffect(() => {
    setTeacherCourses(
      coursesList.filter((i) => i.teacher_id === Number.parseInt(id))
    );
  }, [coursesList]);

  return (
    <InformationCard title="Subjects">
      <>
        {teacherCourses ? (
          teacherCourses.length !== 0 &&
          teacherCourses.map((course) => (
            <Item>
              <p> {course.name}</p>
              <p> {new Date(course.year).getFullYear()}</p>
            </Item>
          ))
        ) : (
          <Loader type="Circles" color="#f5cb5c" height={80} width={80} />
        )}
      </>
    </InformationCard>
  );
};
