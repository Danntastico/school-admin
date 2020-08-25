import React, { useState, useEffect } from "react";
import { InformationCard } from "../../components/InformationCard";
import { personInformationFields } from "../../utils/fieldsList";
import { Field } from "../../components/common/Field";
import { Form } from "../../components/common/Form";
import { Button } from "../../components/common/Button";
import { useInput } from "../../hooks/useInput";

export const PersonInfoCard = ({ title, PATH, activePerson }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { lastName, firstName, age, address } = activePerson;

  const [values, handleInputChange] = useInput({
    firstName: firstName,
    lastName: lastName,
    age: age,
    address: address,
  });

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
      <InformationCard handleOnEditClick={handleOnEditClick} title={title}>
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
