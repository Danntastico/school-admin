import React, { useState } from "react";
import { Headbar } from "../components/Headbar";
import { Form } from "../components/common/Form";
import { personInformationFields } from "../utils/fieldsList";
import { Field } from "../components/common/Field";
import { Button } from "../components/common/Button";
import { CardContainer } from "../styles/CardContainer";
import {
  InformationCardItem,
  InformationCard,
} from "../components/InformationCard";
import { useInput } from "../hooks/useInput";

export const TeacherDetails = () => {
  const [values, handleInputChange, reset] = useInput({});
  const [isEditable, setIsEditable] = useState(false);

  const handleOnEditClick = () => {
    setIsEditable(!isEditable);
  };
  const renderForm = () => {
    return (
      <>
        <Form hideHeader>
          {personInformationFields.map((i) => (
            <Field
              key={i.name}
              value={values[i.value]}
              handleInputChange={handleInputChange}
              {...i}
            />
          ))}
          <Button />
        </Form>
      </>
    );
  };
  const renderInformation = () => (
    <>
      <InformationCardItem label="Name" content="Danilo" />
      <InformationCardItem label="Last Name" content="Danilo" />
      <InformationCardItem label="Age" content="Danilo" />
      <InformationCardItem label="Address" content="Danilo" />
    </>
  );

  return (
    <div>
      <Headbar title="Teacher Details" />
      <div className="pageContent">
        <CardContainer>
          <InformationCard
            handleOnEditClick={handleOnEditClick}
            title="Teacher Information"
          >
            {isEditable ? renderForm() : renderInformation()}
          </InformationCard>
        </CardContainer>
      </div>
    </div>
  );
};
