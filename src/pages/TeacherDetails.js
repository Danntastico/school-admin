import React, { useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../styles/CardContainer";
import { PersonInfoCard } from "../containers/InfoCards/PersonInfoCard";
import { useParams } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import { TEACHER_PATH } from "../utils/constants";
import { startGetItemById } from "../store/middlewares";

export const TeacherDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { teachers } = useSelector((state) => state.root);
  const { activeTeacher } = teachers;
  console.log(activeTeacher);
  useEffect(() => {
    dispatch(startGetItemById(TEACHER_PATH, id));
  }, [id, dispatch]);

  return (
    <div>
      <Headbar title="Teacher Details" />
      <div className="pageContent">
        <CardContainer>
          <PersonInfoCard
            activePerson={activeTeacher}
            PATH={TEACHER_PATH}
            id={id}
            title="Teacher Information"
          />
        </CardContainer>
      </div>
    </div>
  );
};
