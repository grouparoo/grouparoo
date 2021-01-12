import { ConfigTemplateUtils } from "../modules/configTemplateUtils";
import { MustacheUtils } from "../modules/mustacheUtils";
import path from "path";
import fs from "fs-extra";

export interface ConfigTemplateParams {
  [key: string]: string;
}

/**
 * This will then be used to write the files (and deciding if we overwrite or not)
 */
export interface ConfigTemplateRunResponse {
  [relativeFileName: string]: string;
}

export abstract class ConfigTemplate {
  rootPath: string;
  class: string;
  name: string;
  description: string;
  inputs?: {
    [name: string]: {
      required: boolean;
      default?: string;
      description: string;
    };
  };
  files: string[]; // a list of files or a glob of files

  constructor() {
    this.inputs = {};
  }

  /** The main 'do something' method.  Throw is there was an error */
  abstract run({
    params,
  }: {
    params: ConfigTemplateParams;
  }): Promise<ConfigTemplateRunResponse>;

  prepareParams(params: ConfigTemplateParams) {
    // assign defaults
    Object.keys(this.inputs).forEach((k) => {
      if (this.inputs[k].default && (!params[k] || params[k].length === 0)) {
        params[k] = this.inputs[k].default;
      }
    });

    // escape for JSON/JS
    for (const k in params) {
      if (k === "path") continue;
      if (typeof params[k] === "string") {
        params[k] = JSON.stringify(params[k]);
      }
    }

    return params;
  }

  formatForFilesystem(s: string) {
    return s
      .toLowerCase()
      .replace(/\\"/gi, "")
      .replace(/[^a-z0-9\\\//.]/gi, "_")
      .replace(/\/_/, "/")
      .replace(/_\./, ".");
  }

  /**
   * The nominal case where all provided mustache files are computed and copied into the client project
   */
  async mustacheAllFiles(params: ConfigTemplateParams) {
    const response: ConfigTemplateRunResponse = {};
    const errorPrefix = "Missing required input";
    const fileNames = await ConfigTemplateUtils.resolveFiles(this);
    for (const i in fileNames) {
      const fileName = fileNames[i];
      const relativeFileName = this.formatForFilesystem(
        MustacheUtils.strictlyRender(
          fileName.replace(this.rootPath + path.sep, ""),
          params,
          errorPrefix
        )
      );
      const newFilePath = path
        .join(params.path, this.class, relativeFileName)
        .replace(/.template$/, "");
      const content = fs.readFileSync(fileName).toString();
      const newContent = MustacheUtils.strictlyRender(
        content,
        params,
        errorPrefix
      );
      response[newFilePath] = newContent;
    }

    return response;
  }
}
