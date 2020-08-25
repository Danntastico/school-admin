import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};
