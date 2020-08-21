import React from "react";
import { InfoCard, InfoHead, InfoBody, InfoTitle, ButtonsList } from "./styles";
export const InformationCard = ({ children, title }) => {
  return (
    <InfoCard>
      <InfoHead>
        <InfoTitle>{title}</InfoTitle>
        <ButtonsList>{children[0]}</ButtonsList>
      </InfoHead>
      <InfoBody>{children[1]}</InfoBody>
    </InfoCard>
  );
};
