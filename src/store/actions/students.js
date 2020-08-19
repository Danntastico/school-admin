import { GET_ALL_STUDENTS } from "../../utils/constants";

export const getAllStudents = (data) => ({
  type: GET_ALL_STUDENTS,
  payload: data,
});
