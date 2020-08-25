import React from "react";
import {
  CardContent,
  HeaderInfoCard,
  BodyInfoCard,
  InfoCardItem,
} from "./styles";
import { Button } from "../common/Button";
export const InformationCard = ({
  title,
  handleOnClick,
  children,
  hasBtn,
  isEdit,
}) => (
  <CardContent>
    <HeaderInfoCard>
      <h3>{title}</h3>
      {hasBtn &&
        (isEdit ? (
          <button onClick={handleOnClick}>Edit</button>
        ) : (
          <Button onClick={handleOnClick} label="Assign " />
        ))}
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
