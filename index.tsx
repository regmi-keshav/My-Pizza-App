import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { name as appName } from "./app.json"; // Adjusted path to app.json
import store from "store/store";
import App from "./App";

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
