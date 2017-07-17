import { isLoggedIn, getCurrentUser } from "../selectors";
import { fromJS } from "immutable";

describe("auth selectors", () => {
  describe("isLoggedIn", () => {
    it("returns true if user is logged in", () => {
      const state = fromJS({
        auth: {
          isLoggedIn: true
        }
      });
      expect(isLoggedIn(state)).toEqual(true);
    });

    it("returns false if user is not logged in", () => {
      const state = fromJS({
        auth: {
          isLoggedIn: false
        }
      });
      expect(isLoggedIn(state)).toEqual(false);
    });
  });

  describe("getCurrentUser", () => {
    it("returns current user if logged in", () => {
      const state = fromJS({
        auth: {
          currentUserId: "id"
        },
        users: {
          byId: {
            id: {
              full_name: "test user"
            }
          }
        }
      });
      expect(getCurrentUser(state).toJS()).toEqual({
        full_name: "test user"
      });
    });

    it("returns null if currentUserId is blank", () => {
      const state = fromJS({
        auth: {
          currentUserId: null
        }
      });
      expect(getCurrentUser(state)).toEqual(null);
    });
  });
});
