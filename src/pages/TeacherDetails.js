import React from "react";
import { Headbar } from "../components/Headbar";
import { Form } from "../components/common/Form";
import { personInformationFields } from "../utils/fieldsList";
import { Field } from "../components/common/Field";
import { Button } from "../components/common/Button";
import { CardContainer } from "../styles/CardContainer";

export const TeacherDetails = () => {
  return (
    <div>
      <Headbar title="Teacher Details" />
      <div className="pageContent">
        <CardContainer>
          <>
            <Form title="Information" isEditable={true}>
              {personInformationFields.map((i) => (
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
