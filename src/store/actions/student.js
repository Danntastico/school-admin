import { types } from "../../utils/types";

export const getAllStudents = (students) => ({
  type: types.getAllStudents,
  payload: students,
});
