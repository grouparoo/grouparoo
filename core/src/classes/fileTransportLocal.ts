import { log, env } from "actionhero";
import { getParentPath } from "../utils/pluginDetails";
import { FileTransport } from "./fileTransport";
import fs from "fs-extra";
import path from "path";
import os from "os";

export class FileTransportLocal extends FileTransport {
  bucket: string;
  client: any;

  constructor() {
    super();
    this.name = "local";
    this.bucket =
      process.env.FILES_LOCAL_STORAGE ||
      path.join(
        getParentPath(),
        "files",
        process.env.JEST_WORKER_ID
          ? `${env}-${process.env.JEST_WORKER_ID}`
          : env
      );
    this.client = fs;

    log(`using path "${this.bucket}" for Grouparoo file storage`);
    this.client.mkdirpSync(this.bucket);
  }

  async downloadToServer(file) {
    const tmp = os.tmpdir();
    const storagePath = path.join(file.bucket, file.path);
    const localPath = path.join(tmp, file.path);
    await this.client.copySync(storagePath, localPath);
    return { localPath };
  }

  async set(type: string, remotePath: string, localFilePath: string) {
    const fullPath = path.join(this.bucket, type, remotePath);
    if (this.client.existsSync(fullPath)) {
      await this.client.unlinkSync(fullPath);
    }
    await this.client.moveSync(localFilePath, fullPath);
    const bytes = this.client.statSync(fullPath).size;
    return this.afterSet(type, path.join(type, remotePath), bytes);
  }

  async destroy(file) {
    const storagePath = path.join(file.bucket, file.path);
    this.client.unlinkSync(storagePath);
    return this.afterDestroy(file);
  }
}
