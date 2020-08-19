import { types } from "../../utils/types";

const initialState = {
  data: [],
};

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllStudents:
      return {
        ...state,
        data: action.payload,
      };
  }
};
