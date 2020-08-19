import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { STUDENT_PATH } from "../utils/constants";
import { startFetchAllItems } from "../store/middlewares";

export const ListOfStudents = () => {
  const data = useSelector((state) => state.students);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(startFetchAllItems(STUDENT_PATH));
  }, []);
  return (
    <div>
      <h1>List Of Students</h1>
    </div>
  );
};
