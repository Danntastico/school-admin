import { getAllItems, postItem } from "../../utils/services/api";
import {
  STUDENT_PATH,
  TEACHER_PATH,
  COURSE_PATH,
  STUDENTCOURSES_PATH,
  GET_ALL_STUDENTS,
  GET_ALL_TEACHERS,
  GET_ALL_COURSES,
  GET_ALL_STUDENTCOURSES,
  POST_NEW_STUDENT,
  POST_NEW_TEACHER,
  POST_NEW_COURSE,
  POST_NEW_STUDENTCOURSE,
} from "../../utils/constants";

import { get, post } from "../actions/crudActions";
import Swal from "sweetalert2";

export const startFetchAllItems = (itemType) => async (dispatch) => {
  const items = await getAllItems(itemType);

  switch (itemType) {
    case STUDENT_PATH:
      dispatch(get(items, GET_ALL_STUDENTS));
      break;
    case TEACHER_PATH:
      dispatch(get(items, GET_ALL_TEACHERS));

      break;
    case COURSE_PATH:
      dispatch(get(items, GET_ALL_COURSES));
      break;
    case STUDENTCOURSES_PATH:
      dispatch(get(items, GET_ALL_STUDENTCOURSES));
      break;
    default:
      break;
  }
};

export const postNewItem = (itemType, body) => async (dispatch) => {
  const response = await postItem(itemType, body);
  switch (itemType) {
    case STUDENT_PATH:
      dispatch(post(response, POST_NEW_STUDENT));
      break;
    case TEACHER_PATH:
      dispatch(post(response, POST_NEW_TEACHER));
      break;
    case COURSE_PATH:
      dispatch(post(response, POST_NEW_COURSE));
      break;
    case STUDENTCOURSES_PATH:
      dispatch(post(response, POST_NEW_STUDENTCOURSE));
      break;
    default:
      break;
  }
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Saved! 😎",
    showConfirmButton: false,
    timer: 1500,
  });
};
