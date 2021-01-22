import { GrouparooCLI } from "../modules/cli";
import Colors from "colors/safe";
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
    this.name = "generate [template] [id]"; // I will include the template ARG vs OPT
    this.description = `Generate new code config files from templates.

Commands:
  [options]   See "Options" section below.
  [template]  Name of the template. This is a starting point for building your configuration.
              Use --list for a list of available templates.
  [id]        A unique ID used to link items created from templates.
              The value must be unique, using lower case letters and underscores only.`;
    this.inputs = {
      list: {
        required: false,
        description:
          'Display the available config templates to use with config-generate.  You can filter the list of templates by providing a string to match against, ie: `grouparoo generate app --list` to see templates which match "app"',
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
      path: {
        required: true,
        default: path.join(process.env.INIT_CWD || process.cwd(), "config"),
        description: "The location of the config directory",
      },
    };
    this.example =
      'grouparoo generate templateName id -- --name="the-name" --app="app-id"';

    GrouparooCLI.setGrouparooRunMode(this);
  }

  async run({ params }) {
    params = Object.assign(
      params,
      GrouparooCLI.parseTemplateOpts("template", "id")
    );
    GrouparooCLI.logCLI(
      this.name
        .replace(" [template]", params.template ? " " + params.template : "")
        .replace(" [id]", params.id ? " " + params.id : "")
    );

    if (process.argv.slice(2).includes("--list")) {
      await this.list(params);
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
    const learnMoreText =
      "Learn more with `grouparoo generate --help` and `grouparoo generate --list`";

    if (!params.template) {
      this.fatalError(`template is required. ${learnMoreText}`);
    }
    if (!params.id) {
      this.fatalError(`id is required. ${learnMoreText}`);
    }

    const template = await this.getTemplate(params.template);

    const preparedParams = template.prepareParams({ ...params });

    if (preparedParams.id !== params.id) {
      console.log(
        `${Colors.yellow("notice")}: ID was changed to ${preparedParams.id}`
      );
    }

    let fileData: ConfigTemplateRunResponse = {};
    try {
      fileData = await template.run({ params: preparedParams });
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

  async list(params) {
    console.log(
      `Available Templates:${
        params.template ? ` matching "${params.template}"` : ""
      }`
    );
    console.log("");

    const templates = api.plugins.templates();
    for (const i in templates) {
      const template = templates[i];
      if (params.template && template.name.match(params.template)) {
        this.logTemplateAndOptions(template, true);
      } else if (!params.template) {
        this.logTemplateAndOptions(template, true);
      }
    }

    if (!params.template) {
      console.log("");
      console.log(
        "You can filter this list by providing a (partial) template to match template names against"
      );
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
