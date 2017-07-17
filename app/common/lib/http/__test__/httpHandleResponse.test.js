import httpHandleResponse from "../httpHandleResponse";

describe("Http handle response", () => {
  it("should handle success response", () => {
    const responce = httpHandleResponse({ ok: true });
    expect(responce).toEqual({ ok: true });
  });

  it("should handle fail response", () => {
    const request = {
      json: function() {
        return {};
      }
    };
    httpHandleResponse(request).catch(error => {
      expect(error.body).toEqual({});
    });
  });
});
