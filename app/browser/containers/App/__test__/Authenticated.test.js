import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { fromJS } from "immutable";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";

import Authenticated from "../Authenticated";

test("Authenticated renders correct snapshot", () => {
  const fakeStore = state => ({
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return fromJS({ ...state });
    }
  });

  const appStore = fakeStore({});
  const history = createHistory();

  test("App renders correct snapshot", () => {
    const component = renderer.create(
      <Provider store={appStore}>
        <ConnectedRouter history={history}>
          <Authenticated />
        </ConnectedRouter>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
