import { api, Initializer } from "actionhero";
import { File } from "../models/File";

export class Files extends Initializer {
  constructor() {
    super();
    this.name = "files";
    this.loadPriority = 999;
  }

  async initialize() {
    api.files = {
      types: ["csv", "json", "image", "video", "audio", "other"],
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
}
