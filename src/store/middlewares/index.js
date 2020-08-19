import { getAllItems } from "../../utils/services/api";
import { STUDENT_PATH } from "../../utils/constants";
import { getAllStudents } from "../actions/students";

export const fetchAllItems = (itemType) => async (dispatch) => {
  const items = await getAllItems(itemType);
  switch (itemType) {
    case STUDENT_PATH:
      dispatch(getAllStudents(items));
      break;
    default:
      break;
  }
};
