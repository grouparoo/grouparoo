import { MustacheUtils } from "../modules/mustacheUtils";
import path from "path";
import fs from "fs-extra";
import glob from "glob";
import { ConfigWriter } from "../modules/configWriter";

export interface ConfigTemplateParams {
  id?: string;
  [key: string]: string | number | boolean;
}

/**
 * This will then be used to write the files (and deciding if we overwrite or not)
 */
export type ConfigTemplateRunResponse = Record<string, string>;

export abstract class ConfigTemplate {
  name: string;
  description: string;
  params: ConfigTemplateParams;
  inputs?: Record<
    string,
    {
      required: boolean;
      default?: string | number | boolean;
      description: string;
      copyDefaultFrom?: string;
      formatter?: (param: string) => any;
    }
  >;
  files: string[]; // a list of files or a glob of files
  destinationDir: string;
  parentId?: string;

  constructor() {
    this.params = {};
    this.inputs = {};
  }

  /** The main 'do something' method.  Throw is there was an error */
  abstract run({
    params,
  }: {
    params: ConfigTemplateParams;
  }): Promise<ConfigTemplateRunResponse>;

  prepareParams(params: ConfigTemplateParams) {
    this.params = params;

    // source from other params
    Object.keys(this.inputs).forEach((k) => {
      if (
        this.inputs[k].copyDefaultFrom &&
        (!this.params[k] || this.params[k].toString().length === 0)
      ) {
        this.params[k] = this.params[this.inputs[k].copyDefaultFrom];
      }
    });

    // assign defaults
    Object.keys(this.inputs).forEach((k) => {
      if (
        this.inputs[k].default !== undefined &&
        (!this.params[k] || this.params[k].toString().length === 0)
      ) {
        this.params[k] = this.inputs[k].default;
      }
      if (!this.params[k] && this.inputs[k].default === null) {
        this.params[k] = "null";
      }
    });

    // parentId
    if (this.parentId) {
      params[this.parentId] = params["parent"];
      if (!params[this.parentId])
        throw new Error(
          `option parent (-p, --parent) is required - ${this.parentId} is needed for a ${this.name}`
        );
    }

    // format inputs
    Object.keys(this.inputs).forEach((k) => {
      if (typeof this.inputs[k].formatter === "function") {
        this.params[k] = this.inputs[k].formatter(this.params[k].toString());
      }
    });

    // escape for JSON/JS
    for (const k in this.params) {
      if (k === "path") continue;
      if (typeof this.params[k] === "string" && this.params[k] !== "null") {
        this.params[k] = JSON.stringify(this.params[k]);
      }
    }

    return this.params;
  }

  formatForFilesystem(s: string) {
    return s
      .toLowerCase()
      .replace(/"/gi, "")
      .replace(/'/gi, "")
      .replace(/[^a-zA-Z0-9-_/.]/gi, "_");
  }

  formatId(s: string) {
    return ConfigWriter.generateId(s);
  }

  /**
   * The nominal case where all provided mustache files are computed and copied into the client project
   */
  async mustacheAllFiles(
    params: ConfigTemplateParams,
    files = this.files,
    destinationDir = this.destinationDir
  ) {
    const response: ConfigTemplateRunResponse = {};
    const errorPrefix = "Missing required input";
    const fileNames = await this.resolveFiles(files);

    if (!params.path) throw new Error(`params.path missing`);

    for (const i in fileNames) {
      const fileName = fileNames[i];
      const relativeFileName = this.formatForFilesystem(
        MustacheUtils.strictlyRender(
          path.basename(fileName),
          params,
          errorPrefix,
          false
        )
      );
      const newFilePath = path
        .join(params.path.toString(), destinationDir, relativeFileName)
        .replace(/.template$/, "");
      const content = fs.readFileSync(fileName).toString();
      const newContent = MustacheUtils.strictlyRender(
        content,
        params,
        errorPrefix,
        true
      );
      response[newFilePath] = newContent;
    }

    return response;
  }

  async resolveFiles(filesList: string[]) {
    let files: string[] = [];

    for (const i in filesList) {
      const foundFiles = glob.sync(filesList[i]);
      files = files.concat(foundFiles);
    }

    if (files.length === 0) {
      console.error(`no files found matching ${filesList}`);
    }

    return files;
  }

  unquotedId(): null | string {
    if (!this.params.id) return null;
    return this.params.id.replace(/"/g, "");
  }

  extendId(extension: string): null | string {
    if (!this.params.id) return null;
    return `"${this.unquotedId()}_${extension}"`;
  }
}
