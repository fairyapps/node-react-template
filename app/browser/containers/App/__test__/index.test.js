import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { fromJS } from "immutable";
import createHistory from "history/createBrowserHistory";
import configureStore from "../../../../common/configureStore";
import { ConnectedRouter } from "react-router-redux";
import App from "../index";

const history = createHistory();

test("App renders correct snapshot", () => {
  const fakeStore = state => ({
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return fromJS({ ...state });
    }
  });

  const store = fakeStore({
    auth: {
      isLoggedIn: true,
      currentUserId: "1"
    },
    users: {
      byId: {
        "1": {
          id: "1"
        }
      }
    }
  });

  const component = renderer.create(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
