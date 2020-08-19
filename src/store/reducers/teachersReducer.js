const { types } = require("../../utils/types");

const initialState = {
  data: [],
};

export const teachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllTeachers:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return { ...state };
  }
};
