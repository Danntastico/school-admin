import React from "react";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../styles/CardContainer";
import { CourseInfoCard } from "../containers/InfoCards/CourseInfoCard";

export const CourseDetails = () => {
  return (
    <div>
      <Headbar title="course Details" />
      <div className="pageContent">
        <CardContainer>
          <CourseInfoCard />
        </CardContainer>
      </div>
    </div>
  );
};
