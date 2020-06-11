import { api, Initializer } from "actionhero";
import fs from "fs";
import path from "path";

export class Files extends Initializer {
  constructor() {
    super();
    this.name = "clients";
  }

  async initialize() {
    const publicJSDir = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "web",
      "public",
      "javascript"
    );
    if (!fs.existsSync(publicJSDir)) fs.mkdirSync(path.join(publicJSDir));

    // copy the web client javascript from the plugin to the public directory
    const source = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "node_modules",
      "@grouparoo",
      "client-web",
      "dist",
      "grouparooWebClient.js"
    );

    const destination = path.join(publicJSDir, "grouparooWebClient.js");
    fs.copyFileSync(source, destination);
  }
}
