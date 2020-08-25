import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useInput } from "../../hooks/useInput";
import { Form } from "../../components/common/Form";
import { courseInformationFields } from "../../utils/fieldsList";
import { Field } from "../../components/common/Field";
import { Button } from "../../components/common/Button";
import { InformationCard } from "../../components/InformationCard";

export const CourseInfoCard = ({ activeCourse }) => {
  const { teachers } = useSelector((state) => state.root);
  const { data: teachersList } = teachers;

  const [values, handleInputChange] = useInput(activeCourse);
  const [isDisabled, setIsDisabled] = useState(true);

  const renderFields = () =>
    courseInformationFields.map((i) =>
      i.fieldType === "select" ? (
        <Field
          key={i.name}
          value={values[i.name]}
          handleInputChange={handleInputChange}
          disabled={isDisabled}
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
          disabled={isDisabled}
          {...i}
        />
      )
    );

  const handleOnEditClick = () => {
    setIsDisabled(!isDisabled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch()
    console.log(values);
    setIsDisabled(!isDisabled);
  };
  return (
    <div>
      <InformationCard
        handleOnEditClick={handleOnEditClick}
        title="Course Information"
      >
        <Form hideHeader onSubmit={handleSubmit}>
          {renderFields()}
          <Button />
        </Form>
      </InformationCard>
    </div>
  );
};
