import { HTTPError, HTTPUnauthorizedError } from "./httpErrors";

const httpErrors = {
  401: HTTPUnauthorizedError
};

export default function httpHandleResponse(response) {
  if (response.ok) return response;

  const ErrorClass = Object.prototype.hasOwnProperty.call(
    httpErrors,
    response.status
  )
    ? httpErrors[response.status]
    : HTTPError;

  return Promise.resolve(response.json())
    .then(body => ({ response, body }))
    .catch(SyntaxError, () => ({ response, body: {} }))
    .then(() => {
      throw new ErrorClass({ response, body: {} });
    });
}
