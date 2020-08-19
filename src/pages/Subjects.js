import React from "react";

import { Headbar } from "../components/Headbar";
import { useInput } from "../hooks/useInput";
import { useModal } from "../hooks/useModal";
import { Button } from "../components/Button";
import { ModalContainer } from "../components/ModalContainer";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { List } from "../components/List";
import { Table } from "../components/Table";
import { CardContainer } from "../styles/CardContainer";
import { subjectHeadLabels } from "../utils/tableConfig";
import { testSubjects } from "../utils/testData";
import { TableRow } from "../components/TableRow";
import { DETAIL_SUBJECT_PATH } from "../utils/constants";
import { Link } from "../styles/GlobalStyle";

export const Subjects = () => {
  const [values, handleInputChange, reset] = useInput({
    name: "",
  });

  const [isModalOpen, openModal, closeModal] = useModal({ reset });

  const buttons = () => (
    <>
      <Button label="Submit" /> <Button onClick={closeModal} label="Cancel" />
    </>
  );

  const modalComponent = () =>
    isModalOpen && (
      <ModalContainer modalIsOpen={isModalOpen}>
        <Form title="Register a new Subject">
          <Field
            key={values.name}
            value={values[values.name]}
            handleInputChange={handleInputChange}
            name={values.name}
            inputType="text"
            label="Name"
          />
          {buttons()}
        </Form>
      </ModalContainer>
    );
  return (
    <div>
      <Headbar title="Subject View" />
      <div className="pageContent">
        <CardContainer>
          <List
            title="Active Subjects"
            buttonLabel="Add New Subject"
            handleAddItem={openModal}
          >
            <Table headLabels={subjectHeadLabels}>
              {testSubjects.map((item) => (
                <Link to={DETAIL_SUBJECT_PATH}>
                  <TableRow>
                    {Object.values(item).map((i) => (
                      <td key={i}>{i}</td>
                    ))}
                  </TableRow>
                </Link>
              ))}
            </Table>
          </List>
        </CardContainer>
      </div>
      {modalComponent()}
    </div>
  );
};
