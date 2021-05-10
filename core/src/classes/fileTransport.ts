import mime from "mime";
import path from "path";
import { File } from "../models/File";

const DEFAULT_MIME_TYPE = "application/octet-stream";

export abstract class FileTransport {
  name: string;
  tmp: string;
  bucket: string;

  abstract downloadToServer(file: File): Promise<{
    localPath: string;
  }>;

  abstract set(
    type: string,
    remotePath: string,
    localFilePath: string
  ): Promise<File>;

  abstract destroy(file): Promise<File>;

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

  async afterDestroy(file) {
    await file.destroy();
    return file;
  }
}
