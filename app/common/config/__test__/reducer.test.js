import reducer from "../reducer";

describe("config reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {}).toJS()).toEqual({
      appName: "",
      appVersion: ""
    });
  });
});
