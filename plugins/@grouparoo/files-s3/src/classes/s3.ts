import { log } from "actionhero";
import fs from "fs-extra";
import os from "os";
import path from "path";
import { FileTransport } from "@grouparoo/core";
import AWS from "aws-sdk";

const FILE_CACHE_AGE_MS = 1000 * 60 * 60; // 1 hour

export class FileTransportS3 extends FileTransport {
  bucket: string;
  client: AWS.S3;

  constructor() {
    super();
    this.name = "s3";
    this.bucket = process.env.S3_BUCKET;
    this.client = new AWS.S3({
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      region: process.env.S3_REGION,
    });
  }

  async downloadToServer(file) {
    const tmp = os.tmpdir();
    const localPath = path.join(tmp, "grouparoo", file.path);

    await new Promise((resolve, reject) => {
      fs.mkdirp(path.dirname(localPath), (error) => {
        if (error) return reject(error);
        return resolve(null);
      });
    });

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

    const params = {
      Bucket: this.bucket,
      Key: `${file.path}`,
    };

    if (toDownload) {
      await new Promise((resolve, reject) => {
        log("downloading from s3...", "info", params);
        this.client.getObject(params, (error, data) => {
          if (error) return reject(error);
          fs.writeFile(localPath, data.Body, (error) => {
            if (error) return reject(error);
            return resolve(null);
          });
        });
      });
    }

    return { localPath };
  }

  async set(
    type: string,
    remotePath: string,
    localFilePath: string
  ): Promise<any> {
    const bytes = fs.statSync(localFilePath).size;
    const readStream = fs.createReadStream(localFilePath);
    const key = `${type}/${remotePath}`;

    const params = {
      Bucket: this.bucket,
      Key: key,
      Body: readStream,
    };

    return new Promise((resolve, reject) => {
      log("uploading to s3...", "info", params);

      this.client.upload(params, async (error) => {
        readStream.destroy();
        if (error) return reject(error);
        const file = await this.afterSet(type, key, bytes);
        return resolve(file);
      });
    });
  }

  async destroy(file) {
    const params = {
      Bucket: this.bucket,
      Key: `${file.path}`,
    };

    await new Promise((resolve, reject) => {
      log("deleting from s3", "info", params);

      this.client.deleteObject(params, (error) => {
        if (error) return reject(error);
        return resolve(null);
      });
    });

    return this.afterDestroy(file);
  }
}
