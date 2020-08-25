import React, { useState } from "react";
import { InformationCard } from "../../components/InformationCard";
import { personInformationFields } from "../../utils/fieldsList";
import { Field } from "../../components/common/Field";
import { Form } from "../../components/common/Form";
import { Button } from "../../components/common/Button";
import { useInput } from "../../hooks/useInput";
import { startPutItem } from "../../store/middlewares";
import { useDispatch } from "react-redux";

export const PersonInfoCard = ({ id, title, PATH, activePerson }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const [values, handleInputChange] = useInput(activePerson);

  const handleOnEditClick = () => {
    setIsDisabled(!isDisabled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startPutItem(PATH, Number.parseInt(id), values));
    console.log(values);
    setIsDisabled(!isDisabled);
  };

  return (
    <div>
      <InformationCard
        hasBtn
        isEdit
        handleOnClick={handleOnEditClick}
        title={title}
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
