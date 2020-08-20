import {
  GET_ALL_STUDENTS,
  POST_NEW_STUDENT,
  GET_STUDENT_BY_ID,
  PUT_STUDENT,
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
    case PUT_STUDENT:
      return {
        ...state,
        data: state.data.map((i) =>
          action.payload.id === i.id ? action.payload : i
        ),
      };
    default:
      return state;
  }
};
