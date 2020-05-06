import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/authenticatedAction";
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
      limit: { required: true, default: 1000, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: true,
        default: [
          ["type", "desc"],
          ["path", "desc"],
        ],
      },
      type: { required: false },
    };
  }

  async run({ response, params }) {
    const search = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where: {},
    };

    if (params.type) {
      search.where = { type: params.type };
    }

    const files = await File.findAll(search);
    response.files = await Promise.all(files.map(async (f) => f.apiData()));
    response.total = await File.count(search);
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

  async run({ response }) {
    response.options = {
      types: api.files.types,
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
      file: { required: true },
    };
  }

  async run({ response, params }) {
    const file = await api.files.set(
      params.type,
      params.file.name,
      params.file.path
    );
    response.file = await file.apiData();
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
      guid: { required: true },
    };
  }

  async run(data) {
    const { connection, params } = data;

    const file = await File.findByGuid(params.guid);
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
        return resolve();
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
      guid: { required: true },
    };
  }

  async run({ response, params }) {
    response.success = false;
    const file = await File.findByGuid(params.guid);
    await api.files.destroy(file);
    response.success = true;
  }
}
