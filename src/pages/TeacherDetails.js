import React, { useEffect, useState } from "react";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../styles/CardContainer";
import { PersonInfoCard } from "../containers/InfoCards/PersonInfoCard";
import { useParams } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { TEACHER_PATH, COURSE_PATH } from "../utils/constants";
import { startGetItemById, startGetAllItems } from "../store/middlewares";
import Loader from "react-loader-spinner";
import { InformationCard } from "../components/InformationCard";
import { Item } from "../components/common/Item";

export const TeacherDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { teachers } = useSelector((state) => state.root);
  const { courses } = useSelector((state) => state.root);
  const { activeTeacher } = teachers;
  const { data: coursesList } = courses;
  const [teacherCourses, setTeacherCourses] = useState(null);

  useEffect(() => {
    setTeacherCourses(
      coursesList.filter((i) => i.teacher_id === Number.parseInt(id))
    );
  }, [coursesList]);
  console.log(teacherCourses);
  useEffect(() => {
    dispatch(startGetItemById(TEACHER_PATH, id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(startGetAllItems(COURSE_PATH));
  }, []);
  return (
    <div>
      <Headbar title="Teacher Details" />
      <div className="pageContent">
        <CardContainer>
          {activeTeacher ? (
            <PersonInfoCard
              activePerson={activeTeacher}
              PATH={TEACHER_PATH}
              id={id}
              title="Teacher Information"
            />
          ) : (
            <Loader type="Circles" color="#f5cb5c" height={80} width={80} />
          )}
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
        </CardContainer>
      </div>
    </div>
  );
};
