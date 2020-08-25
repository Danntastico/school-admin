import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInput } from "../../hooks/useInput";
import { Form } from "../../components/common/Form";
import { courseInformationFields } from "../../utils/fieldsList";
import { Field } from "../../components/common/Field";
import { Button } from "../../components/common/Button";
import { InformationCard } from "../../components/InformationCard";
import { startGetAllItems, startPutItem } from "../../store/middlewares";
import { TEACHER_PATH, COURSE_PATH } from "../../utils/constants";

export const CourseInfoCard = ({ id, activeCourse }) => {
  const { teachers } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const { data: teachersList } = teachers;
  const [isDisabled, setIsDisabled] = useState(true);
  const [values, handleInputChange] = useInput(activeCourse);
  useEffect(() => {
    dispatch(startGetAllItems(TEACHER_PATH));
  }, []);

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
            <option disabled={isDisabled} value={teacher.id}>
              {teacher.firstName} {teacher.lastName}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          key={i.name}
          value={values[i.name]}
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
    dispatch(startPutItem(COURSE_PATH, Number.parseInt(id), values));
    console.log(values);
    setIsDisabled(!isDisabled);
  };
  return (
    <div>
      <InformationCard
        hasBtn
        isEdit
        handleOnClick={handleOnEditClick}
        title="Course Information"
      >
        <Form hideHeader onSubmit={handleSubmit}>
          {renderFields()}
          <Button isDisabled={isDisabled} type="submit" label="Submit" />
        </Form>
      </InformationCard>
    </div>
  );
};
