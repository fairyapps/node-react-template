import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import initialState from "./initialState";
import defaultActions from "./defaultActions";
import reducers from "../../common/reducers";
import manifest from "./assetsManifest";
import App from "../../browser/containers/App";

const assets = manifest();

// WARNING: See the following for security issues around embedding JSON in HTML:
// http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
const renderLayout = (html, preloadedState, styles) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset=utf-8/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Yourfeed</title>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
      </head>
      <body>
        <div id=app>${html}</div>
        <style>
          body {
            background-color: #faf8f5;
            font-family: Arial, Helvetica,sans-serif;
            color: #000;
            line-height: 18px;
            font-size: 14px;
          }
        </style>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
        ${styles}
        ${process.env.NODE_ENV === "production"
          ? `<script src="/dist/${assets["assetsByChunkName"][
              "common"
            ]}"></script>
           <script src="/dist/${assets["assetsByChunkName"]["app"]}"></script>
          `
          : `<script src="/dist/app.js"></script>`}
      </body>
    </html>
  `;
};

export default function render(req, res) {
  const state = initialState(req);
  const store = createStore(reducers, state);
  const sheet = new ServerStyleSheet();
  const context = {};

  return defaultActions(store.dispatch, req)
    .then(() => {
      const page = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      const styles = sheet.getStyleTags();
      const finalState = store.getState();
      const html = renderLayout(page, finalState, styles);

      res.status(200).send(html);
    })
    .catch(error => {
      if (process.env.NODE_ENV === "production") res.redirect("/");
      else res.status(200).send(error.message + error.stack);
    });
}
