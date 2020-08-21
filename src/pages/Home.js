import React, { useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { useDispatch, useSelector } from "react-redux";
import { startGetAllItems } from "../store/middlewares";
import {
  STUDENTCOURSES_PATH,
  COURSE_PATH,
  TEACHER_PATH,
  STUDENT_PATH,
} from "../utils/constants";

export const Home = () => {
  return (
    <div>
      <Headbar title="home" />
    </div>
  );
};
