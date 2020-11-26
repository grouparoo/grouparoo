import { Initializer, config } from "actionhero";
import fs from "fs";
import path from "path";

export class Clients extends Initializer {
  constructor() {
    super();
    this.name = "clients";
  }

  async initialize() {
    const publicJSDir = path.join(config.general.paths.public[0], "javascript");
    if (!fs.existsSync(publicJSDir)) fs.mkdirSync(path.join(publicJSDir));

    // copy the web client javascript from the plugin to the public directory
    const source = path.join(
      require.resolve("@grouparoo/client-web"),
      "..",
      "grouparooWebClient.js"
    );

    const destination = path.join(publicJSDir, "grouparooWebClient.js");
    fs.copyFileSync(source, destination);
  }
}
