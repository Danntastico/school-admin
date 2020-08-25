import React, { useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../styles/CardContainer";
import { CourseInfoCard } from "../containers/InfoCards/CourseInfoCard";
import { useParams } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { startGetItemById } from "../store/middlewares";
import { COURSE_PATH } from "../utils/constants";
import Loader from "react-loader-spinner";
import { CoursingStudents } from "../containers/SubjectsCards/CoursingStudents";

export const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.root);
  const { activeCourse } = courses;
  useEffect(() => {
    dispatch(startGetItemById(COURSE_PATH, id));
  }, [id, dispatch]);

  return (
    <div>
      <Headbar title="course Details" />
      <div className="pageContent">
        <CardContainer>
          {activeCourse ? (
            <CourseInfoCard id={id} activeCourse={activeCourse} />
          ) : (
            <Loader type="Circles" color="#f5cb5c" height={80} width={80} />
          )}
          <CoursingStudents id={id} />
        </CardContainer>
      </div>
    </div>
  );
};
