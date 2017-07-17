import { Map } from "immutable";

const initialState = Map({
  appName: "",
  appVersion: ""
});

export default (state = initialState) => state;
