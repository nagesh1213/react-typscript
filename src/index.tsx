import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { AppState } from "./interfaces";
import { initialConfigState } from "./redux/reducers/OrgInfo";
import configureStore from "./redux/store";
import Routes from "./Routes";

export const initialState: AppState = {
  config: initialConfigState,
};

const store = configureStore(initialState);
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
