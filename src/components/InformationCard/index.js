import React from "react";
import { MdEdit } from "react-icons/md";
import { InfoCard, InfoHead, InfoBody, InfoTitle } from "./styles";
import { EditBtn } from "../Form/styles";
export const InformationCard = ({
  children,
  handleClickOnEdit,
  title,
  isEditable,
}) => {
  return (
    <InfoCard>
      <InfoHead>
        <InfoTitle>{title}</InfoTitle>
        {isEditable && (
          <EditBtn onClick={handleClickOnEdit}>
            <MdEdit />
          </EditBtn>
        )}
      </InfoHead>
      <InfoBody>{children}</InfoBody>
    </InfoCard>
  );
};
