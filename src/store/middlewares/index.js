import { getAllItems } from "../../utils/services/api";
import { STUDENT_PATH, TEACHER_PATH, COURSE_PATH } from "../../utils/constants";
import { getAllStudents } from "../actions/students";
import { getAllTeachers } from "../actions/teachers";
import { getAllCourses } from "../actions/courses";

export const startFetchAllItems = (itemType) => async (dispatch) => {
  const items = await getAllItems(itemType);
  switch (itemType) {
    case STUDENT_PATH:
      dispatch(getAllStudents(items));
      break;
    case TEACHER_PATH:
      dispatch(getAllTeachers(items));
      break;
    case COURSE_PATH:
      dispatch(getAllCourses(items));
      break;
    default:
      break;
  }
};
