import { log, env } from "actionhero";
import { getParentPath } from "../utils/pluginDetails";
import { FileTransport } from "./fileTransport";
import fs from "fs-extra";
import path from "path";
import os from "os";

const FILE_CACHE_AGE_MS = 1000 * 60 * 60; // 1 hour

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

    const toDownload: boolean = await new Promise((resolve, reject) => {
      fs.stat(localPath, (error, stats) => {
        if (error) {
          if (error.code === "ENOENT") return resolve(true);
          else return reject(error);
        }

        const now = new Date();
        if (now.getTime() - stats.birthtime.getTime() > FILE_CACHE_AGE_MS) {
          return resolve(true);
        } else {
          return resolve(false);
        }
      });
    });

    if (toDownload) await this.client.copySync(storagePath, localPath);

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
