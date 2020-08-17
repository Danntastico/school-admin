import React from "react";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../components/CardContainer";
import { subjectInformationFields } from "../utils/fieldsList";
import { Field } from "../components/Field";
import { Button } from "../components/Button";
import { Table } from "../components/Table";
import { TableItem } from "../components/TableItem";
import { Form } from "../components/Form";

export const SubjectDetails = () => {
  return (
    <div>
      <Headbar title="Subject Details" />
      <div className="pageContent">
        <CardContainer>
          <>
            <Form title="Information" isEditable={true}>
              {subjectInformationFields.map((i) => (
                <Field key={i.name} {...i} />
              ))}
              <Button label="Submit" isDisabled={true} />
            </Form>
          </>
          <>
            <Table>
              <TableItem />
            </Table>
          </>
        </CardContainer>
      </div>
    </div>
  );
};
