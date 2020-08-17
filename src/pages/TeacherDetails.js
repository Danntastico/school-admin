import React from "react";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../components/CardContainer";
import { Form } from "../components/Form";
import { informationFields } from "../utils/fieldsList";
import { Field } from "../components/Field";
import { Button } from "../components/Button";

export const TeacherDetails = () => {
  return (
    <div>
      <Headbar title="Teacher Details" />
      <div className="pageContent">
        <CardContainer>
          <>
            <Form title="Information" isEditable={true}>
              {informationFields.map((i) => (
                <Field key={i.name} {...i} />
              ))}
              <Button label="Submit" isDisabled={true} />
            </Form>
          </>
        </CardContainer>
      </div>
    </div>
  );
};
