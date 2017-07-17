import { createSelector } from "reselect";

const getUsers = state => state.get("users");
const getAuth = state => state.get("auth");

export const isLoggedIn = createSelector(getAuth, auth =>
  auth.get("isLoggedIn")
);

export const getCurrentUser = createSelector(
  getAuth,
  getUsers,
  (auth, users) => {
    const currentUserId = auth.get("currentUserId");
    if (currentUserId) {
      return users.getIn(["byId", currentUserId]);
    }
    return null;
  }
);
