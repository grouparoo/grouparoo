import { api, Initializer } from "actionhero";
import fs from "fs";
import path from "path";

export class Files extends Initializer {
  constructor() {
    super();
    this.name = "clients";
  }

  async initialize() {
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

    const destination = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "web",
      "public",
      "javascript",
      "grouparooWebClient.js"
    );

    fs.copyFileSync(source, destination);
  }
}
