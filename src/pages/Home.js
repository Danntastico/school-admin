import React, { useEffect } from "react";
import { Headbar } from "../components/Headbar";
import { useDispatch } from "react-redux";
import { startGetAllItems } from "../store/middlewares";
import {
  STUDENTCOURSES_PATH,
  COURSE_PATH,
  TEACHER_PATH,
  STUDENT_PATH,
} from "../utils/constants";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAllItems(STUDENT_PATH));
    dispatch(startGetAllItems(STUDENTCOURSES_PATH));
    dispatch(startGetAllItems(COURSE_PATH));
    dispatch(startGetAllItems(TEACHER_PATH));
  }, []);
  return (
    <div>
      <Headbar title="home" />
    </div>
  );
};
