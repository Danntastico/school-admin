import React from "react";
import { MdEdit } from "react-icons/md";
import { InfoCard, InfoHead, InfoBody, InfoTitle } from "./styles";
import { EditBtn } from "../Form/styles";
export const InformationCard = ({ children, editInfo }) => {
  return (
    <InfoCard>
      <InfoHead>
        <InfoTitle>Information</InfoTitle>
        <EditBtn onClick={editInfo}>
          <MdEdit />
        </EditBtn>
      </InfoHead>
      <InfoBody>{children}</InfoBody>
    </InfoCard>
  );
};
