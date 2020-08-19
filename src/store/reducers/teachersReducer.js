import { GET_ALL_TEACHERS, POST_NEW_TEACHER } from "../../utils/constants";

const initialState = {
  data: [],
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

    default:
      return state;
  }
};
