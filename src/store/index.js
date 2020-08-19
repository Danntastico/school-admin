import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { studentsReducer } from "./reducers/studentsReducer";
import { teachersReducer } from "./reducers/teachersReducer";
import { coursesReducer } from "./reducers/coursesReducer";
import { studentCourseReducer } from "./reducers/studentCourseReducer";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  students: studentsReducer,
  teachers: teachersReducer,
  courses: coursesReducer,
  studentCourse: studentCourseReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
