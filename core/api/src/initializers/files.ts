import { api, Initializer } from "actionhero";
import { File } from "../index";
import { FileTransport } from "../classes/fileTransport";

declare module "actionhero" {
  interface Api {
    files: {
      types: string[];
      transport: FileTransport;
      downloadToServer: FileTransport["downloadToServer"];
      set: FileTransport["set"];
      destroy: FileTransport["destroy"];
    };
  }
}

export class Files extends Initializer {
  constructor() {
    super();
    this.name = "files";
    this.loadPriority = 999;
    this.startPriority = 1;
  }

  async initialize() {
    api.files = {
      types: ["csv", "json", "image", "video", "audio", "other"],
      transport: undefined,
      downloadToServer: async (file: File) => {
        throw new Error("not implemented");
      },
      set: async (type: string, remotePath: string, localFile: string) => {
        throw new Error("not implemented");
      },
      destroy: async (file: File) => {
        throw new Error("not implemented");
      },
    };
  }

  async start() {
    // default to localFile if no file transport was loaded by a plugin
    if (!api.files.transport) {
      const { FileTransportLocal } = require("../classes/fileTransportLocal");
      const instance = new FileTransportLocal();
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
}
