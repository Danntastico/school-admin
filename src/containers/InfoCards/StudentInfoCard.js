import React, { useState } from "react";
import {
  InformationCard,
  InformationCardItem,
} from "../../components/InformationCard";
import { personInformationFields } from "../../utils/fieldsList";
import { Field } from "../../components/common/Field";
import { Form } from "../../components/common/Form";
import { Button } from "../../components/common/Button";
import { useInput } from "../../hooks/useInput";

export const StudentInfoCard = () => {
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
      <InformationCard
        handleOnEditClick={handleOnEditClick}
        title="Student Information"
      >
        {isEditable ? renderForm() : renderInformation()}
      </InformationCard>
    </div>
  );
};
