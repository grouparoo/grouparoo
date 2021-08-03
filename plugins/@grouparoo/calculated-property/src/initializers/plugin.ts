import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";
import {
  CalculatedPropertyAppTemplate,
  CalculatedPropertyPropertyTemplate,
  CalculatedPropertySourceTemplate,
} from "../lib/templates";

import { test } from "../lib/test";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/calculated-property/calculated-property.svg",
      templates: [
        CalculatedPropertyAppTemplate,
        CalculatedPropertySourceTemplate,
        CalculatedPropertyPropertyTemplate,
      ],
      apps: [
        {
          name: "calculated-property",
          options: [],
          methods: { test },
        },
      ],
      connections: [],
    });
  }

  async start() {
    plugin.mountModels();
  }
}
