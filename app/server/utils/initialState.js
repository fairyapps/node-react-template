import { Map } from "immutable";

export default function(req) {
  return Map({
    config: {
      apiURL: "/webapi"
    },
    routing: {
      path: req.path
    }
  });
}
