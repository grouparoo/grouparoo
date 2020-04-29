import { Initializer, api } from "actionhero";
import { plugin } from "@grouparoo/core";
import { FileTransportLocal } from "../classes/local";
const packageJSON = require("./../../package.json");

export class EmailAuth extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
    });

    const instance = new FileTransportLocal();

    api.files.transport = packageJSON.name;
    api.files.downloadToServer = async (file) => {
      return instance.downloadToServer(file);
    };

    api.files.set = async (type, remotePath, localFile) => {
      return instance.set(type, remotePath, localFile);
    };

    api.files.destroy = async (file) => {
      return instance.destroy(file);
    };
  }
}
