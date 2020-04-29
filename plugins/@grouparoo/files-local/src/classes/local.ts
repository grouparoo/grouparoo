import path from "path";
import { log } from "actionhero";
import { FileTransport } from "@grouparoo/core";
import * as fs from "fs-extra";

export class FileTransportLocal extends FileTransport {
  bucket: string;
  client: any;

  constructor() {
    super();
    this.name = "local";
    this.bucket =
      process.env.FILES_LOCAL_STORAGE || path.join(process.cwd(), "files");
    this.client = fs;

    log(`using path "${this.bucket}" for Grouparoo file storage`);
    this.client.mkdirpSync(this.bucket);
  }

  async downloadToServer(file) {
    const storagePath = path.join(file.bucket, file.path);
    const localPath = path.join(this.tmp, file.path);
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
