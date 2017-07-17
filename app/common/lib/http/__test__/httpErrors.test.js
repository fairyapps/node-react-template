import { HTTPUnauthorizedError } from "../httpErrors";

describe("Http Errors", () => {
  it("should has error classes", () => {
    const error = new HTTPUnauthorizedError({ response: {}, body: {} });
    expect(error.body).toEqual({});
  });
});
