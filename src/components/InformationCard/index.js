import React from "react";
import { CardContent, HeaderInfoCard, BodyInfoCard } from "./styles";
export const InformationCard = ({ title, handleOnEditClick, children }) => {
  return (
    <CardContent>
      <HeaderInfoCard>
        <h3>{title}</h3>
        <button onClick={handleOnEditClick}>Edit</button>
      </HeaderInfoCard>
      <BodyInfoCard>{children}</BodyInfoCard>
    </CardContent>
  );
};
