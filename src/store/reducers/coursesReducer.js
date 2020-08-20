import {
  GET_ALL_COURSES,
  POST_NEW_COURSE,
  GET_COURSE_BY_ID,
} from "../../utils/constants";

const initialState = {
  data: [],
  targetItem: {},
};

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COURSES:
      return {
        ...state,
        data: action.payload,
      };
    case POST_NEW_COURSE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case GET_COURSE_BY_ID:
      return {
        ...state,
        targetItem: action.payload,
      };
    default:
      return state;
  }
};
