import { api, config, log, Initializer } from "actionhero";

import { FileTransportLocal } from "../fileTransports/local";
import { FileTransportS3 } from "../fileTransports/s3";

export class Files extends Initializer {
  constructor() {
    super();
    this.name = "files";
    this.loadPriority = 1001;
  }

  async initialize() {
    api.files = {};

    api.files.types = ["csv", "json", "image", "video", "audio", "other"];

    if (config.files.transport === "local") {
      api.files.transport = new FileTransportLocal();
    } else if (config.files.transport === "s3") {
      api.files.transport = new FileTransportS3();
    } else {
      throw new Error("unknown file transport type");
    }

    log(`initialized file transport type: ${config.files.transport}`);
    api.files.downloadToServer = async (file) => {
      return api.files.transport.downloadToServer(file);
    };
    api.files.set = async (type, remotePath, localFile) => {
      return api.files.transport.set(type, remotePath, localFile);
    };
    api.files.destroy = async (type, remotePath) => {
      return api.files.transport.destroy(type, remotePath);
    };
  }
}
