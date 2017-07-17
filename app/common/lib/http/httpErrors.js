import ExtendableError from "es6-error";

export class HTTPError extends ExtendableError {
  constructor({ response, body }) {
    super();
    this.response = response;
    this.body = body;

    if (body && body.errors) this.errors = body.errors;
    else this.errors = {};
  }
}

export class HTTPUnauthorizedError extends HTTPError {}
