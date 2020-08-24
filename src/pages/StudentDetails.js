import React, { useState, useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { useDispatch, useSelector } from "react-redux";
import { STUDENT_PATH } from "../utils/constants";
import { startGetItemById } from "../store/middlewares";
import { useParams } from "@reach/router";
import { useInput } from "../hooks/useInput";
import { CardContainer } from "../styles/CardContainer";
import { Button } from "../components/common/Button";
import { InformationCard } from "../components/InformationCard";
import { Form } from "../components/common/Form";
import { Field } from "../components/common/Field";
import { personInformationFields } from "../utils/fieldsList";

export const StudentDetails = () => {
  return (
    <>
      <Headbar title="Student Details" />
      <div className="pageContent"></div>
    </>
  );
};
