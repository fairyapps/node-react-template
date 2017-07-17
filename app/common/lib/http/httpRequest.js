import fetch from "isomorphic-fetch";
import Promise from "bluebird";
import queryString from "query-string";
import httpHandleResponse from "./httpHandleResponse";

function httpHeaders(customHeaders = {}) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...customHeaders
  };

  return headers;
}

function httpResponse(response) {
  if (response.status === 204) return {};

  return response.json().catch(() => {});
}

function httpHandleError(error) {
  //error.response.status
  throw error;
}

export default function httpRequest({
  path,
  method,
  query = {},
  body = null,
  headers = {}
}) {
  const options = {
    credentials: "include",
    headers: httpHeaders(headers),
    method
  };

  const url = `/webapi/${path}`;
  const stringifiedQuery = queryString.stringify(query);
  const urlWithQuery = stringifiedQuery ? `${url}?${stringifiedQuery}` : url;

  if (method !== "GET") options.body = JSON.stringify(body);

  const fetchPromise = fetch(urlWithQuery, options);

  return Promise.resolve(fetchPromise)
    .then(httpHandleResponse)
    .catch(httpHandleError)
    .then(httpResponse);
}
