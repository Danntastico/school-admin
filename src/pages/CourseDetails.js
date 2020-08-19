import React from "react";
import { Headbar } from "../components/Headbar";
import { courseInformationFields } from "../utils/fieldsList";
import { Field } from "../components/Field";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { CardContainer } from "../styles/CardContainer";

export const CourseDetails = () => {
  return (
    <div>
      <Headbar title="course Details" />
      <div className="pageContent">
        <CardContainer>
          <>
            <Form title="Information" isEditable={true}>
              {courseInformationFields.map((i) => (
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
