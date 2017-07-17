import fs from "fs";
import path from "path";

function readManifest() {
  if (process.env.NODE_ENV !== "production") return;

  const manifestPath = path.join(
    __dirname,
    "../../../",
    "assets-manifest.json"
  );
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

const manifestData = readManifest();

export default function manifest() {
  return manifestData;
}
