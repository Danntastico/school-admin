import { GET_ALL_COURSES } from "../../utils/constants";

export const getAllCourses = (data) => ({
  type: GET_ALL_COURSES,
  payload: data,
});
