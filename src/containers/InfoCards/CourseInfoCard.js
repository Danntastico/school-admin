import React, { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Form } from "../../components/common/Form";
import { courseInformationFields } from "../../utils/fieldsList";
import { Field } from "../../components/common/Field";
import { Button } from "../../components/common/Button";
import {
  InformationCardItem,
  InformationCard,
} from "../../components/InformationCard";

export const CourseInfoCard = () => {
  const [values, handleInputChange, reset] = useInput({});
  const [isEditable, setIsEditable] = useState(false);

  const handleOnEditClick = () => {
    setIsEditable(!isEditable);
  };
  const renderForm = () => {
    return (
      <>
        <Form hideHeader>
          {courseInformationFields.map((i) => (
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
      <InformationCardItem label="Teacher" content="Danilo" />
      <InformationCardItem label="Year" content="Danilo" />
    </>
  );
  return (
    <div>
      <InformationCard
        handleOnEditClick={handleOnEditClick}
        title="Course Information"
      >
        {isEditable ? renderForm() : renderInformation()}
      </InformationCard>
    </div>
  );
};
