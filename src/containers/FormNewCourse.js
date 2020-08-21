import React, { useEffect } from "react";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { Button } from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllItems } from "../store/middlewares";
import { TEACHER_PATH } from "../utils/constants";

export const FormNewCourse = ({
  fields,
  PATH,
  values,
  handleInputChange,
  handleClickCancelForm,
  handleSubmit,
}) => {
  const { teachers } = useSelector((state) => state.root);
  const { data: teachersList } = teachers;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAllItems(TEACHER_PATH));
  }, []);

  return (
    <Form onSumit={handleSubmit} title={`Register a new ${PATH}`}>
      {fields.map((i) =>
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
      )}
      {
        <>
          <Button type="submit" label="submit" />
          <Button onClick={handleClickCancelForm} label="cancel" />
        </>
      }
    </Form>
  );
};
