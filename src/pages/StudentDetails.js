import React, { useState } from "react";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../styles/CardContainer";
import {
  InformationCard,
  InformationCardItem,
} from "../components/InformationCard";
import { Form } from "../components/common/Form";
import { Field } from "../components/common/Field";
import { personInformationFields } from "../utils/fieldsList";
import { useInput } from "../hooks/useInput";
import { Button } from "../components/common/Button";

export const StudentDetails = () => {
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
    <>
      <Headbar title="Student Details" />
      <div className="pageContent">
        <CardContainer>
          <InformationCard
            handleOnEditClick={handleOnEditClick}
            title="Student Information"
          >
            {isEditable ? renderForm() : renderInformation()}
          </InformationCard>
        </CardContainer>
      </div>
    </>
  );
};
