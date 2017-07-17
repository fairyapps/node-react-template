import express from "express";
import path from "path";
import dotenv from "dotenv";
import error from "./middlewares/error";
import render from "./utils/render";

dotenv.config();

const PUBLIC = path.join(__dirname, "..", "..", "public");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(...require("./middlewares/devAssets").default());
}

app.use(express.static(path.join(PUBLIC)));

app.get("*", render);

app.use(error);

const server = app.listen(process.env.PORT || 8080, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Running on http://${host}:${port}`);
});
