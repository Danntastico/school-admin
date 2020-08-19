import { GET_ALL_STUDENTS } from "../../utils/constants";

const initialState = {
  data: [],
};

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
