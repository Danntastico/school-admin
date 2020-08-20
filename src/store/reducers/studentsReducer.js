import {
  GET_ALL_STUDENTS,
  POST_NEW_STUDENT,
  GET_STUDENT_BY_ID,
} from "../../utils/constants";

const initialState = {
  data: [],
  targetItem: {},
};

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return {
        ...state,
        data: action.payload,
      };

    case POST_NEW_STUDENT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case GET_STUDENT_BY_ID:
      return {
        ...state,
        targetItem: action.payload,
      };

    default:
      return state;
  }
};
