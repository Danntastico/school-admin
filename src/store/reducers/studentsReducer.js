import { GET_ALL_STUDENTS, POST_NEW_STUDENT } from "../../utils/constants";

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

    case POST_NEW_STUDENT:
      console.log(action.payload);
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};
