import { log } from "actionhero";
import fs from "fs-extra";
import os from "os";
import path from "path";
import { FileTransport } from "@grouparoo/core";

export class FileTransportS3 extends FileTransport {
  bucket: string;
  client: any;

  constructor() {
    super();
    this.name = "s3";
    this.bucket = process.env.S3_BUCKET;
    this.client = require("@auth0/s3").createClient({
      s3Options: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        region: process.env.S3_REGION,
      },
    });
  }

  async downloadToServer(file) {
    const tmp = os.tmpdir();
    const localPath = path.join(tmp, "grouparoo", file.path);

    await new Promise((resolve, reject) => {
      const params = {
        localFile: localPath,
        s3Params: {
          Bucket: this.bucket,
          Key: `${file.path}`,
        },
      };

      log("downloading from s3", "info", params);
      const getter = this.client.downloadFile(params);
      getter.on("error", (error) => {
        console.error(error);
        reject(error);
      });
      getter.on("end", () => {
        resolve();
      });
    });

    return { localPath };
  }

  async set(
    type: string,
    remotePath: string,
    localFilePath: string
  ): Promise<any> {
    const bytes = fs.statSync(localFilePath).size;

    return new Promise((resolve, reject) => {
      const params = {
        localFile: localFilePath,
        s3Params: {
          Bucket: this.bucket,
          Key: `${type}/${remotePath}`,
        },
      };

      log("uploading to s3", "info", params);
      const uploader = this.client.uploadFile(params);

      uploader.on("error", (error) => {
        reject(error);
      });

      uploader.on("end", async () => {
        const file = await this.afterSet(type, `${type}/${remotePath}`, bytes);
        resolve(file);
      });
    });
  }

  async destroy(file) {
    await new Promise((resolve, reject) => {
      const params = {
        Bucket: this.bucket,
        Delete: {
          Objects: [{ Key: `${file.path}` }],
        },
      };

      log("deleting from s3", "info", params);
      const deleter = this.client.deleteObjects(params);
      deleter.on("error", (error) => {
        reject(error);
      });
      deleter.on("end", () => {
        resolve();
      });
    });

    return this.afterDestroy(file);
  }
}
