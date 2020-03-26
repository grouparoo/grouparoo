import mime from "mime";
import path from "path";
import os from "os";
import { File } from "../models/File";

const DEFAULT_MIME_TYPE = "application/octet-stream";

export abstract class FileTransportBase {
  name: string;
  tmp: string;
  bucket: string;

  constructor() {
    this.name = "_base";
    this.tmp = os.tmpdir();
  }

  abstract async downloadToServer(
    file
  ): Promise<{
    [key: string]: any;
  }>;

  abstract async set(type, remotePath, localFile): Promise<File>;

  abstract async destroy(file: File);

  async afterSet(type, remotePath, sizeBytes): Promise<File> {
    const extension = path.extname(remotePath);

    const file = new File({
      type,
      transport: this.name,
      bucket: this.bucket,
      path: path.join(path.dirname(remotePath), path.basename(remotePath)),
      extension,
      mime: mime.getType(extension) || DEFAULT_MIME_TYPE,
      sizeBytes,
    });

    await file.save();
    return file;
  }

  async afterDestroy(file: File) {
    await file.destroy();
    return file;
  }
}
