import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";
import { getAllStudents } from "./utils/services/api";

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
