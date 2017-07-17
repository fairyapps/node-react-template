import createHistory from "history/createBrowserHistory";
import configureStore from "../configureStore";
import { fromJS } from "immutable";

const history = createHistory();

describe("configure store", () => {
  it("should configures store", () => {
    expect(fromJS(configureStore({}, history)).keySeq().toArray()).toEqual([
      "dispatch",
      "subscribe",
      "getState",
      "replaceReducer"
    ]);
  });
});
