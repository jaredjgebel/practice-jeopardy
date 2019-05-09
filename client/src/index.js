import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ScreenClassProvider } from "react-grid-system";
import store from "./redux/store";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <ScreenClassProvider>
      <App />
    </ScreenClassProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
