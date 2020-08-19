import {
  GET_ALL_STUDENTCOURSES,
  POST_NEW_STUDENT,
} from "../../utils/constants";

const initialState = {
  data: [],
};

export const studentCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTCOURSES:
      return {
        ...state,
        data: action.payload,
      };
    case POST_NEW_STUDENT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
