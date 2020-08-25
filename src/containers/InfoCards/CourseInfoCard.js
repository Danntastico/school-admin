import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  const { teachers } = useSelector((state) => state.root);
  const { data: teachersList } = teachers;

  const [values, handleInputChange, reset] = useInput({});
  const [isEditable, setIsEditable] = useState(false);

  const handleOnEditClick = () => {
    setIsEditable(!isEditable);
  };
  const renderFields = () =>
    courseInformationFields.map((i) =>
      i.fieldType === "select" ? (
        <Field
          key={i.name}
          value={values[i.name]}
          handleInputChange={handleInputChange}
          {...i}
        >
          <option> </option>
          {teachersList.map((teacher) => (
            <option value={teacher.id}>
              {teacher.firstName} {teacher.lastName}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          key={i.name}
          value={values[i.value]}
          handleInputChange={handleInputChange}
          {...i}
        />
      )
    );
  const renderForm = () => {
    return (
      <>
        <Form hideHeader>
          {renderFields()}
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
