import {
  getAllItems,
  postItem,
  getItemById,
  putItem,
  deleteItem,
} from "../../utils/services/api";
import {
  STUDENT_PATH,
  TEACHER_PATH,
  COURSE_PATH,
  STUDENTCOURSES_PATH,
  GET_ALL_STUDENTS,
  GET_ALL_TEACHERS,
  GET_ALL_COURSES,
  GET_ALL_STUDENTCOURSES,
  GET_STUDENT_BY_ID,
  GET_TEACHER_BY_ID,
  GET_COURSE_BY_ID,
  GET_STUDENTCOURSES_BY_ID,
  POST_NEW_STUDENT,
  POST_NEW_TEACHER,
  POST_NEW_COURSE,
  POST_NEW_STUDENTCOURSE,
  PUT_TEACHER,
  PUT_STUDENT,
  PUT_COURSE,
  DELETE_STUDENTCOURSE,
  DELETE_STUDENT,
  DELETE_TEACHER,
  DELETE_COURSE,
} from "../../utils/constants";

import { get, post, getId, put, deleteI } from "../actions/crudActions";
import Swal from "sweetalert2";

export const startGetAllItems = (itemType) => async (dispatch) => {
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

export const startGetItemById = (itemType, id) => async (dispatch) => {
  const items = await getItemById(itemType, id);
  switch (itemType) {
    case STUDENT_PATH:
      dispatch(getId(items, GET_STUDENT_BY_ID));
      break;
    case TEACHER_PATH:
      dispatch(getId(items, GET_TEACHER_BY_ID));
      break;
    case COURSE_PATH:
      dispatch(getId(items, GET_COURSE_BY_ID));
      break;
    case STUDENTCOURSES_PATH:
      dispatch(getId(items, GET_STUDENTCOURSES_BY_ID));
      break;
    default:
      break;
  }
};

export const startPostItem = (itemType, body) => async (dispatch) => {
  const response = await postItem(itemType, body);
  console.log("Body", body);
  console.log("response", response);
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

export const startPutItem = (itemType, id, body) => async (dispatch) => {
  const response = await putItem(itemType, id, body);

  switch (itemType) {
    case STUDENT_PATH:
      dispatch(put(response, PUT_STUDENT));
      break;
    case TEACHER_PATH:
      dispatch(post(response, PUT_TEACHER));
      break;
    case COURSE_PATH:
      dispatch(post(response, PUT_COURSE));
      break;
    default:
      break;
  }

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Updated! 😎",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const startDeleteItem = (itemType, id) => async (dispatch) => {
  const response = await deleteItem(itemType, id);

  switch (itemType) {
    case STUDENT_PATH:
      dispatch(deleteI(response, DELETE_STUDENT));
      break;
    case TEACHER_PATH:
      dispatch(deleteI(response, DELETE_TEACHER));
      break;
    case COURSE_PATH:
      dispatch(deleteI(response, DELETE_COURSE));
      break;
    case STUDENTCOURSES_PATH:
      dispatch(deleteI(response, DELETE_STUDENTCOURSE));
      break;
    default:
      break;
  }

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Item Deleted! 😎",
    showConfirmButton: false,
    timer: 1500,
  });
};
