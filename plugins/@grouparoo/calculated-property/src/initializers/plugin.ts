import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";
import {
  CalculatedPropertyAppTemplate,
  CalculatedPropertyPropertyTemplate,
  CalculatedPropertySourceTemplate,
} from "../lib/templates";
import { recordProperty } from "../lib/recordProperty";

import { test } from "../lib/test";
import { propertyOptions } from "../lib/propertyOptions";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
    this.startPriority = 1;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/calculated-property/calculated-property.png",
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
      connections: [
        {
          name: "calculated-property-import",
          direction: "import",
          description:
            "Import and calculate Calculated Properties from other sources",
          app: "calculated-property",
          groupAggregations: [],
          options: [],
          methods: {
            recordProperty: recordProperty,
            propertyOptions: propertyOptions,
          },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}
