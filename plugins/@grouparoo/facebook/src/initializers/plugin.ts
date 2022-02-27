import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";
import { test } from "./../lib/test";
import { buildConnection as buildCustomConnection } from "../lib/export-custom/connection";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/facebook/facebook.png",
      apps: [
        {
          name: "facebook",
          displayName: "Facebook",
          options: [
            {
              key: "adAccountId",
              displayName: "Ad Account Id",
              required: true,
              description: "Number from your settings and in the URL",
              placeholder: "i.e. 562677826929881",
            },
            {
              key: "accessToken",
              type: "password",
              displayName: "Access Token",
              required: true,
              description: "Needs the ads_management permission",
            },
          ],
          methods: { test },
        },
      ],
      connections: [buildCustomConnection()],
    });
  }

  async start() {
    plugin.mountModels();
  }
}
