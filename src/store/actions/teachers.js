import { GET_ALL_TEACHERS } from "../../utils/constants";

export const getAllTeachers = (data) => ({
  type: GET_ALL_TEACHERS,
  payload: data,
});
