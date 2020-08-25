import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { dataReducer } from "./reducers/dataReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["navigation"],
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  root: dataReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
