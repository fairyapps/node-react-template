import { Map } from "immutable";
import reducers from "../reducers";

describe("combined reducer", () => {
  it("should return the list of reducers", () => {
    expect(reducers(Map({}), {}).keySeq().toArray()).toEqual([
      "auth",
      "config",
      "device",
      "users",
      "routing"
    ]);
  });
});
