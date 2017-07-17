import reducer from "../reducer";

describe("device reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {}).toJS()).toEqual({
      host: ""
    });
  });
});
