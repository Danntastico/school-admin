import {
  GET_ALL_TEACHERS,
  POST_NEW_TEACHER,
  GET_TEACHER_BY_ID,
  PUT_TEACHER,
} from "../../utils/constants";

const initialState = {
  data: [],
  targetItem: {},
};

export const teachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TEACHERS:
      return {
        ...state,
        data: action.payload,
      };

    case POST_NEW_TEACHER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case GET_TEACHER_BY_ID:
      return {
        ...state,
        targetItem: action.payload,
      };
    case PUT_TEACHER:
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
