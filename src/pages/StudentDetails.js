import React, { useState } from "react";
import { Headbar } from "../components/Headbar";

import { Form } from "../components/Form";
import { informationFields } from "../utils/fieldsList";
import { Field } from "../components/Field";
import { Button } from "../components/Button";

import { useInput } from "../hooks/useInput";
import { CardContainer } from "../styles/CardContainer";

export const StudentDetails = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [state, handleInputChange] = useInput({
    name: "Danilo",
    lastName: "Peña",
    age: 24,
    address: "Cr 123 # 3- 321 sur",
    cellphone: "34568985434",
  });

  const handleClickEditFormBtn = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);
  };

  return (
    <>
      <Headbar title="Student Details" />
      <div className="pageContent">
        <CardContainer>
          <>
            <Form
              title="Information"
              isEditable={true}
              onClick={handleClickEditFormBtn}
            >
              {informationFields.map((i) => (
                <Field
                  key={i.name}
                  value={state[i.name]}
                  handleInputChange={handleInputChange}
                  disabled={isDisabled}
                  {...i}
                />
              ))}
              <Button label="Submit" isDisabled={isDisabled} />
            </Form>
          </>
        </CardContainer>
      </div>
    </>
  );
};
