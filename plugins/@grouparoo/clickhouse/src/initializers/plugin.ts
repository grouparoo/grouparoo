import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  name = packageJSON.name;

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "",
      templates: [],
      apps: [],
      connections: [],
    });
  }

  async start() {
    plugin.mountModels();
  }
}
