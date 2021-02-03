import { MustacheUtils } from "../modules/mustacheUtils";
import path from "path";
import fs from "fs-extra";
import glob from "glob";

export interface ConfigTemplateParams {
  [key: string]: string | number | boolean;
}

/**
 * This will then be used to write the files (and deciding if we overwrite or not)
 */
export interface ConfigTemplateRunResponse {
  [relativeFileName: string]: string;
}

export abstract class ConfigTemplate {
  name: string;
  description: string;
  inputs?: {
    [name: string]: {
      required: boolean;
      default?: string | number | boolean;
      description: string;
      copyDefaultFrom?: string;
      formatter?: (param: string) => any;
    };
  };
  files: string[]; // a list of files or a glob of files
  destinationDir: string;

  constructor() {
    this.inputs = {
      id: {
        required: true,
        description:
          "The ID of the new object being generated.  Will be used to construct the object's id",
        formatter: (p) => this.formatId(p),
      },
    };
  }

  /** The main 'do something' method.  Throw is there was an error */
  abstract run({
    params,
  }: {
    params: ConfigTemplateParams;
  }): Promise<ConfigTemplateRunResponse>;

  prepareParams(params: ConfigTemplateParams) {
    // source from other params
    Object.keys(this.inputs).forEach((k) => {
      if (
        this.inputs[k].copyDefaultFrom &&
        (!params[k] || params[k].toString().length === 0)
      ) {
        params[k] = params[this.inputs[k].copyDefaultFrom];
      }
    });

    // assign defaults
    Object.keys(this.inputs).forEach((k) => {
      if (
        this.inputs[k].default !== undefined &&
        (!params[k] || params[k].toString().length === 0)
      ) {
        params[k] = this.inputs[k].default;
      }
      if (!params[k] && this.inputs[k].default === null) {
        params[k] = "null";
      }
    });

    // format inputs
    Object.keys(this.inputs).forEach((k) => {
      if (typeof this.inputs[k].formatter === "function") {
        params[k] = this.inputs[k].formatter(params[k].toString());
      }
    });

    // escape for JSON/JS
    for (const k in params) {
      if (k === "path") continue;
      if (typeof params[k] === "string" && params[k] !== "null") {
        params[k] = JSON.stringify(params[k]);
      }
    }

    return params;
  }

  formatForFilesystem(s: string) {
    return s
      .toLowerCase()
      .replace(/"/gi, "")
      .replace(/'/gi, "")
      .replace(/[^a-zA-Z0-9-_\/.]/gi, "_");
  }

  formatId(s: string) {
    return s.toLowerCase().replace(/[^a-zA-Z0-9-_\/.]/gi, "_");
  }

  /**
   * The nominal case where all provided mustache files are computed and copied into the client project
   */
  async mustacheAllFiles(params: ConfigTemplateParams) {
    const response: ConfigTemplateRunResponse = {};
    const errorPrefix = "Missing required input";
    const fileNames = await this.resolveFiles(this);

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
        .join(params.path.toString(), this.destinationDir, relativeFileName)
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

  async resolveFiles(template: ConfigTemplate) {
    let files: string[] = [];

    for (const i in template.files) {
      const foundFiles = glob.sync(template.files[i]);
      files = files.concat(foundFiles);
    }

    if (files.length === 0) {
      console.error(`no files found matching ${template.files}`);
    }

    return files;
  }
}
