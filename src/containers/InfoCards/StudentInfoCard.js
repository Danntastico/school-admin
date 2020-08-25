import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "@reach/router";
import {
  InformationCard,
  InformationCardItem,
} from "../../components/InformationCard";
import { personInformationFields } from "../../utils/fieldsList";
import { Field } from "../../components/common/Field";
import { Form } from "../../components/common/Form";
import { Button } from "../../components/common/Button";
import { useInput } from "../../hooks/useInput";
import { startGetItemById } from "../../store/middlewares";
import { STUDENT_PATH } from "../../utils/constants";

export const StudentInfoCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.root);
  const { activeStudent } = students;
  const [studentDetails, setStudentDetails] = useState(activeStudent);
  const [isDisabled, setIsDisabled] = useState(true);
  const { lastName, firstName, age, address } = studentDetails;
  const [values, handleInputChange] = useInput({
    firstName: firstName,
    lastName: lastName,
    age: age,
    address: address,
  });

  useEffect(() => {
    dispatch(startGetItemById(STUDENT_PATH, id));
  }, [id, dispatch]);

  useEffect(() => {
    setStudentDetails(activeStudent);
  }, [activeStudent]);

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
        title="Student Information"
      >
        <Form hideHeader onSubmit={handleSubmit}>
          {personInformationFields.map((i) => (
            <Field
              key={i.name}
              value={values[i.name]}
              handleInputChange={handleInputChange}
              disabled={isDisabled}
              {...i}
            />
          ))}
          <Button isDisabled={isDisabled} type="submit" label="Submit" />
        </Form>
      </InformationCard>
    </div>
  );
};
