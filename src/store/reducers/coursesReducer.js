import { GET_ALL_COURSES, POST_NEW_COURSE } from "../../utils/constants";

const initialState = {
  data: [],
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
    default:
      return state;
  }
};
