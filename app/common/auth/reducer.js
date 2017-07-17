import { fromJS } from "immutable";
import { AUTH_SUCCESS } from "./actions";

const initialState = fromJS({
  isLoggedIn: false,
  currentUserId: null
});

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return state.merge({
        isLoggedIn: true,
        currentUserId: action.payload.id
      });
    }
  }

  return state;
};
