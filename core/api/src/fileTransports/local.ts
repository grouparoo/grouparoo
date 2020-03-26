import { config } from "actionhero";
import path from "path";
import { FileTransportBase } from "./base";
import { File } from "../models/File";

export class FileTransportLocal extends FileTransportBase {
  bucket: string;
  client: any;

  constructor() {
    super();
    this.name = "local";
    this.bucket = config.files.path;
    this.client = require("fs-extra");
  }

  async downloadToServer(file: File) {
    const storagePath = path.join(file.bucket, file.path);
    const localPath = path.join(this.tmp, file.path);
    await this.client.copySync(storagePath, localPath);
    return { localPath };
  }

  async set(type, remotePath, localFile) {
    const fullPath = path.join(this.bucket, type, remotePath);
    if (this.client.existsSync(fullPath)) {
      await this.client.unlinkSync(fullPath);
    }
    await this.client.moveSync(localFile, fullPath);
    const bytes = this.client.statSync(fullPath).size;
    return this.afterSet(type, path.join(type, remotePath), bytes);
  }

  async destroy(file: File) {
    const storagePath = path.join(file.bucket, file.path);
    this.client.unlinkSync(storagePath);
    return this.afterDestroy(file);
  }
}
