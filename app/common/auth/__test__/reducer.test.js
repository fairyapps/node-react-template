import reducer from "../reducer";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {}).toJS()).toEqual({
      isLoggedIn: false,
      currentUserId: null
    });
  });
});
