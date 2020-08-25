import React, { useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../styles/CardContainer";
import { PersonInfoCard } from "../containers/InfoCards/PersonInfoCard";
import { useParams } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { TEACHER_PATH, COURSE_PATH } from "../utils/constants";
import { startGetItemById, startGetAllItems } from "../store/middlewares";
import Loader from "react-loader-spinner";
import { TeacherSubjects } from "../containers/SubjectsCards/TeacherSubjects";

export const TeacherDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { teachers } = useSelector((state) => state.root);
  const { activeTeacher } = teachers;

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
          <TeacherSubjects id={id} />
        </CardContainer>
      </div>
    </div>
  );
};
