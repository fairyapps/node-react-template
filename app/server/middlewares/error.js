export default function apiError(err, req, res, next) {
  const errorDetails = err.stack || err;

  console.error("API ERROR:", errorDetails); // eslint-disable-line no-console

  res.status(503).json({ errors: err.toString() });
}
