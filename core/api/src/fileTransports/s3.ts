import { config, log } from "actionhero";
import fs from "fs-extra";
import path from "path";
import { FileTransportBase } from "./base";
import { File } from "../models/File";

export class FileTransportS3 extends FileTransportBase {
  bucket: string;
  client: any;

  constructor() {
    super();
    this.name = "s3";
    this.bucket = config.files.bucket;
    this.client = require("@auth0/s3").createClient({
      s3Options: {
        accessKeyId: config.files.accessKeyId,
        secretAccessKey: config.files.secretAccessKey,
        region: config.files.region,
      },
    });
  }

  async downloadToServer(file: File) {
    const localPath = path.join(this.tmp, file.path);

    await new Promise((resolve, reject) => {
      var params = {
        localFile: localPath,
        s3Params: {
          Bucket: this.bucket,
          Key: `${file.path}`,
        },
      };

      log("downloading from s3", "info", params);
      const getter = this.client.downloadFile(params);
      getter.on("error", (error) => {
        console.log(error);
        reject(error);
      });
      getter.on("end", () => {
        resolve();
      });
    });

    return { localPath };
  }

  async set(type, remotePath, localFile): Promise<File> {
    const bytes = fs.statSync(localFile).size;

    return new Promise((resolve, reject) => {
      var params = {
        localFile,
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

      uploader.on("end", () => {
        const file = this.afterSet(type, `${type}/${remotePath}`, bytes);
        resolve(file);
      });
    });
  }

  async destroy(file: File) {
    await new Promise((resolve, reject) => {
      var params = {
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
