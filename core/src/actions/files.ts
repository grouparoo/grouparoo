import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { File } from "../models/File";
import fs from "fs-extra";

export class FilesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "files:list";
    this.description = "list all the files";
    this.outputExample = {};
    this.permission = { topic: "file", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: false,
        default: [
          ["type", "desc"],
          ["path", "desc"],
        ],
      },
      type: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const search = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where: {},
    };

    if (params.type) search.where = { type: params.type };

    const files = await File.findAll(search);
    const total = await File.count(search);

    return {
      total,
      files: await Promise.all(files.map((f) => f.apiData())),
    };
  }
}

export class FileOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "files:options";
    this.description = "options for creating a file";
    this.outputExample = {};
    this.permission = { topic: "file", mode: "read" };
    this.inputs = {};
  }

  async runWithinTransaction() {
    return {
      options: { types: api.files.types },
    };
  }
}

// to test:
// curl -X POST -F 'file=@../web/public/images/roo.png' -d type=test http://localhost:8080/api/1/file
export class FileCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "file:create";
    this.description = "create and upload a file";
    this.outputExample = {};
    this.permission = { topic: "file", mode: "write" };
    this.inputs = {
      type: { required: true },
      _file: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const file = await api.files.set(
      params.type,
      params._file.name,
      params._file.path
    );

    return { file: await file.apiData() };
  }
}

export class FileDetails extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "file:details";
    this.description = "view the details of a file";
    this.outputExample = {};
    this.permission = { topic: "file", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const file = await File.findById(params.id);
    return { file: await file.apiData() };
  }
}

export class FileView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "file:view";
    this.description = "view a file";
    this.outputExample = {};
    this.permission = { topic: "file", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction(data) {
    const { connection, params } = data;

    const file = await File.findById(params.id);
    const { localPath } = await api.files.downloadToServer(file);

    const nameParts = file.path.split("/");
    const fileName = nameParts[nameParts.length - 1];
    const headers = {
      "Content-Type": file.mime,
      Length: file.sizeBytes,
      "Content-Disposition": `attachment; filename="${fileName}"`,
    };

    await new Promise((resolve, reject) => {
      fs.readFile(localPath, (error, fileBuffer) => {
        if (error) {
          return reject(error);
        }
        data.toRender = false;
        connection.pipe(fileBuffer, headers);
        return resolve(null);
      });
    });
  }
}

export class FileDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "file:destroy";
    this.description = "destroy a file";
    this.outputExample = {};
    this.permission = { topic: "file", mode: "write" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const file = await File.findById(params.id);
    await api.files.destroy(file);
    return { success: true };
  }
}
