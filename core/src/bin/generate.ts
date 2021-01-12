import { GrouparooCLI } from "../modules/cli";
import { ConfigTemplateUtils } from "../modules/configTemplateUtils";
import {
  ConfigTemplate,
  ConfigTemplateRunResponse,
} from "../classes/configTemplate";
import { CLI } from "actionhero";
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
        required: true,
        default: "false",
        description:
          "Display the available config templates to use with config-generate",
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
    } else {
      await this.generate(params);
    }

    return true;
  }

  help() {
    const params = GrouparooCLI.parseTemplateOpts("template");
    if (!params.template) return;

    const template = this.getTemplate(params.template);

    console.log("");
    this.logTemplateAndOptions(template);
  }

  async generate(params) {
    if (!params.template) {
      this.fatalError(
        `template is required.  Learn more with \`grouparoo generate --help\` and \`grouparoo generate --list\``
      );
    }

    const template = this.getTemplate(params.template);

    let fileData: ConfigTemplateRunResponse = {};
    try {
      fileData = await template.run({
        params: template.assignDefaults(params),
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

    const templates = ConfigTemplateUtils.loadTemplates();
    for (const i in templates) {
      const template = templates[i];
      this.logTemplateAndOptions(template);
    }
  }

  getTemplate(templateName: string) {
    const templates = ConfigTemplateUtils.loadTemplates();
    const template = templates.find((t) => t.name === templateName);
    if (!template) {
      this.fatalError(`template for "${templateName}" not found`);
    }
    return template;
  }

  logTemplateAndOptions(template: ConfigTemplate) {
    console.log(GrouparooCLI.underlineBold(template.name));
    console.log(`  ${template.description}`);
    Object.keys(template.inputs).forEach((k) => {
      const req = template.inputs[k].required && !template.inputs[k].default;
      console.log(
        `  * ${k}${req ? " (required)" : ""} - ${
          template.inputs[k].description
        } ${
          template.inputs[k].default
            ? `(default: "${template.inputs[k].default}")`
            : ""
        }`
      );
    });
    console.log("");
  }

  fatalError(message: string) {
    console.error("❌ " + message);
    if (process.env.NODE_ENV !== "test") process.exit(1);
  }
}
