import { GET_ALL_STUDENTS } from "../../utils/constants";

export const getAllStudents = (itemList) => ({
  type: GET_ALL_STUDENTS,
  payload: itemList,
});
