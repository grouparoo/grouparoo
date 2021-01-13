import { GrouparooCLI } from "../modules/cli";
import {
  ConfigTemplate,
  ConfigTemplateRunResponse,
} from "../classes/configTemplate";
import { CLI, api } from "actionhero";
import path from "path";
import fs from "fs-extra";
import prettier from "prettier";

export class Generate extends CLI {
  constructor() {
    super();
    this.name = "generate [template]"; // I will include the template ARG vs OPT
    this.description = "Generate new code config files from templates";
    this.inputs = {
      path: {
        required: true,
        default: path.join(process.env.INIT_CWD || process.cwd(), "config"),
        description: "The location of the config directory",
      },
      list: {
        required: false,
        description:
          "Display the available config templates to use with config-generate",
      },
      describe: {
        required: false,
        description: "Display the options for the template in detail",
      },
      overwrite: {
        required: true,
        default: "false",
        description: "Overwrite existing files?",
      },
    };
    this.example =
      'grouparoo generate templateName -- --id="the-id" --name="the-name" --app="app-id"';

    GrouparooCLI.setGrouparooRunMode(this);
  }

  async run({ params }) {
    params = Object.assign(params, GrouparooCLI.parseTemplateOpts("template"));
    GrouparooCLI.logCLI(
      this.name.replace(
        " [template]",
        params.template ? " " + params.template : ""
      )
    );

    if (process.argv.slice(2).includes("--list")) {
      await this.list();
    } else if (process.argv.slice(2).includes("--describe")) {
      await this.describe(params);
    } else {
      await this.generate(params);
    }

    return true;
  }

  async describe(params) {
    if (!params.template) this.fatalError(`no template provided`);

    const template = await this.getTemplate(params.template);
    this.logTemplateAndOptions(template);
  }

  async generate(params) {
    if (!params.template) {
      this.fatalError(
        `template is required.  Learn more with \`grouparoo generate --help\` and \`grouparoo generate --list\``
      );
    }

    const template = await this.getTemplate(params.template);

    let fileData: ConfigTemplateRunResponse = {};
    try {
      fileData = await template.run({
        params: template.prepareParams(params),
      });
    } catch (error) {
      this.fatalError(error.message);
    }

    Object.keys(fileData).forEach((filename) => {
      if (
        process.argv.slice(2).includes("--overwrite") ||
        !fs.existsSync(filename)
      ) {
        fs.mkdirpSync(path.dirname(filename));
        fs.writeFileSync(
          filename,
          prettier.format(fileData[filename], { parser: "babel" })
        );
        console.log(`✅ wrote ${filename}`);
      } else {
        this.fatalError(`${filename} already exists`);
      }
    });
  }

  async list() {
    console.log(`Available Templates:`);
    console.log("");

    const templates = api.plugins.templates();
    for (const i in templates) {
      const template = templates[i];
      this.logTemplateAndOptions(template, true);
    }
  }

  async getTemplate(templateName: string) {
    const templates = api.plugins.templates();
    const template = templates.find((t) => t.name === templateName);
    if (!template) {
      this.fatalError(`template for "${templateName}" not found`);
    }
    return template;
  }

  logTemplateAndOptions(template: ConfigTemplate, compact = false) {
    if (compact) {
      console.log(
        "  " +
          GrouparooCLI.underlineBold(template.name) +
          ` (${Object.keys(template.inputs).join(", ")}) - ${
            template.description
          }`
      );
    } else {
      console.log(`${template.description}`);
      console.log("");
      console.log("Options:");
      Object.keys(template.inputs).forEach((k) => {
        const req =
          template.inputs[k].required &&
          (template.inputs[k].default === null ||
            template.inputs[k].default === undefined);
        console.log(
          `  * ${k}${req ? " (required)" : ""} - ${
            template.inputs[k].description
          } ${
            template.inputs[k].default !== null &&
            template.inputs[k].default !== undefined
              ? `(default: ${JSON.stringify(template.inputs[k].default)})`
              : ""
          }${
            template.inputs[k].copyDefaultFrom
              ? `(default copied from ${template.inputs[k].copyDefaultFrom})`
              : ""
          }`
        );
      });
      console.log("");
    }
  }

  fatalError(message: string) {
    console.error("❌ " + message);
    if (process.env.NODE_ENV !== "test") process.exit(1);
  }
}
