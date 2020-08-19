import { GET_ALL_COURSES } from "../../utils/constants";

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

    default:
      return {
        ...state,
      };
  }
};
