import React from "react";
import { render } from "react-dom";
import createHistory from "history/createBrowserHistory";
import { fromJS } from "immutable";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import configureStore from "../common/configureStore";
import App from "./containers/App";
const history = createHistory();
const store = configureStore(window.__PRELOADED_STATE__, history);

delete window.__PRELOADED_STATE__;

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
