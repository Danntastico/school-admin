import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";
import { getAllStudents } from "./utils/services/api";

export const App = () => {
  getAllStudents().then((res) => console.log(res));
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
