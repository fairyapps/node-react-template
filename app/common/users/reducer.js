import { fromJS, Map } from "immutable";
import { SET_CURRENT_USER } from "./actions";

const initialState = fromJS({
  byId: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return state.mergeDeep({
        byId: Map.of(action.payload.id, fromJS(action.payload))
      });
    }
  }

  return state;
};
