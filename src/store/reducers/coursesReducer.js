import { types } from "../../utils/types";

const initialState = {
  data: [],
};

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllCourses:
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
