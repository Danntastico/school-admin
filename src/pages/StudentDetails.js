import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../styles/CardContainer";
import { PersonInfoCard } from "../containers/InfoCards/PersonInfoCard";
import { useParams } from "@reach/router";
import { STUDENT_PATH } from "../utils/constants";
import { startGetItemById } from "../store/middlewares";
import Loader from "react-loader-spinner";

export const StudentDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.root);
  const { activeStudent } = students;

  const [studentDetails, setStudentDetails] = useState(activeStudent);

  useEffect(() => {
    dispatch(startGetItemById(STUDENT_PATH, id));
  }, []);
  useEffect(() => {
    console.log("change!");
    setStudentDetails(activeStudent);
  }, [activeStudent]);

  return (
    <>
      <Headbar title="Student Details" />
      <div className="pageContent">
        <CardContainer>
          {activeStudent ? (
            <PersonInfoCard
              activePerson={activeStudent}
              PATH={STUDENT_PATH}
              id={id}
              title="Student Information"
            />
          ) : (
            <Loader type="Circles" color="#f5cb5c" height={80} width={80} />
          )}
        </CardContainer>
      </div>
    </>
  );
};
