import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { studentsReducer } from "./reducers/studentsReducer";
import { teachersReducer } from "./reducers/teachersReducer";
import { coursesReducer } from "./reducers/coursesReducer";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  students: studentsReducer,
  teachers: teachersReducer,
  courses: coursesReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
