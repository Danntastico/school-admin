import React from "react";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../styles/CardContainer";
import { StudentInfoCard } from "../containers/InfoCards/StudentInfoCard";

export const StudentDetails = () => {
  return (
    <>
      <Headbar title="Student Details" />
      <div className="pageContent">
        <CardContainer>
          <StudentInfoCard />
        </CardContainer>
      </div>
    </>
  );
};
