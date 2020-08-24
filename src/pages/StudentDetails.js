import React, { useState, useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { PersonDetails } from "../containers/PersonDetails";
import { personInformationFields } from "../utils/fieldsList";
import { useDispatch, useSelector } from "react-redux";
import { STUDENT_PATH } from "../utils/constants";
import { startGetItemById } from "../store/middlewares";
import { useParams } from "@reach/router";
import { useInput } from "../hooks/useInput";

export const StudentDetails = () => {

  const {id} = useParams();
  const {students} = useSelector(state => state.root)
  const {activeStudent} = students;
  const dispatch = useDispatch()
  const [studentInfo, setStudentInfo] = useState(activeStudent);
  console.log(studentInfo);
  const [formValues, handleInputChange] = useInput(studentInfo);

  useEffect(()=>{
    dispatch(startGetItemById(STUDENT_PATH, id))
  }, [dispatch, id])
  useEffect(() => {
    setStudentInfo(activeStudent);
  }, [activeStudent])
  return (
    <>
      <Headbar title="Student Details" />
      <div className="pageContent">
        <PersonDetails fields={personInformationFields} values={formValues} />
      </div>
    </>
  );
};
