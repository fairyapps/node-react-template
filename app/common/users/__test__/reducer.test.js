import reducer from "../reducer";

describe("users reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {}).toJS()).toEqual({
      byId: {}
    });
  });
});
