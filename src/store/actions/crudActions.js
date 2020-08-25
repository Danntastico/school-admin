import {
  GET_STUDENTCOURSES_BY_ID,
  RECEIVECSV_DATA,
} from "../../utils/constants";

export const get = (data, actionType) => ({
  type: actionType,
  payload: data,
});

export const post = (item, actionType) => ({
  type: actionType,
  payload: item,
});

export const getId = (item, actionType) => ({
  type: actionType,
  payload: item,
});

export const getStudentActiveCourses = (studentId) => ({
  type: GET_STUDENTCOURSES_BY_ID,
  payload: studentId,
});

export const put = (item, actionType) => ({
  type: actionType,
  payload: item,
});

export const clearActiveItem = (type) => ({ type: type });

export const deleteI = (item, actionType) => ({
  type: actionType,
  payload: item,
});

export const receiveCSVData = (data) => ({
  type: RECEIVECSV_DATA,
  payload: data,
});
