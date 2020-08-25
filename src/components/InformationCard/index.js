import React from "react";
import {
  CardContent,
  HeaderInfoCard,
  BodyInfoCard,
  InfoCardItem,
} from "./styles";
export const InformationCard = ({ title, handleOnEditClick, children }) => (
  <CardContent>
    <HeaderInfoCard>
      <h3>{title}</h3>
      <button onClick={handleOnEditClick}>Edit</button>
    </HeaderInfoCard>
    <BodyInfoCard>{children}</BodyInfoCard>
  </CardContent>
);

export const InformationCardItem = ({ label, content }) => (
  <InfoCardItem>
    <h3>{label}</h3>
    <p>{content}</p>
  </InfoCardItem>
);
