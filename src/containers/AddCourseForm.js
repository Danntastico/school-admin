import React, { useEffect } from "react";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../hooks/useInput";
import { Button } from "../components/Button";
import { postNewItem, startFetchAllItems } from "../store/middlewares";
import { TEACHER_PATH } from "../utils/constants";

export const AddCourseForm = ({
  title,
  fields,
  initialState,
  handleClick,
  isFormActive,
  ITEM_TYPE,
  deactivateForm,
}) => {
  const [values, handleInputChange, reset] = useInput(initialState);
  const dispatch = useDispatch();
  const { data: teachersList } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(startFetchAllItems(TEACHER_PATH));
  }, []);
  const buttons = () => (
    <>
      <Button label="Submit" /> <Button onClick={handleClick} label="Cancel" />
    </>
  );

  useEffect(() => {
    !isFormActive && reset();
  }, [isFormActive]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewItem(ITEM_TYPE, values));
    deactivateForm();
  };
  return (
    <Form title={title} onSubmit={handleSubmit}>
      {fields.map((field) =>
        field.fieldType === "select" ? (
          <Field
            key={field.name}
            value={values[field.name]}
            handleInputChange={handleInputChange}
            {...field}
          >
            {teachersList.map((teacher) => (
              <option value={teacher.id}>
                {teacher.firstName} {teacher.lastName}
              </option>
            ))}
          </Field>
        ) : (
          <Field
            key={field.name}
            value={values[field.name]}
            handleInputChange={handleInputChange}
            {...field}
          />
        )
      )}
      {buttons()}
    </Form>
  );
};
