import { GrouparooCLI } from "../modules/cli";
import { ConfigTemplateUtils } from "../modules/configTemplateUtils";
import { CLI } from "actionhero";
import path from "path";
import fs from "fs-extra";
import prettier from "prettier";

export class Validate extends CLI {
  constructor() {
    super();
    this.name = "generate";
    this.description = "Generate new code config files from templates";
    this.inputs = {
      template: {
        required: false,
        description: "The template to generate from",
      },
      path: {
        required: true,
        default: path.join(process.env.INIT_CWD, "config"),
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

    // dynamically append inputs form templates
    const templates = ConfigTemplateUtils.loadTemplates();
    templates.forEach((t) => {
      Object.keys(t.inputs).forEach((k) => {
        if (!this.inputs[k])
          this.inputs[k] = {
            required: false,
            description: "  - possible template input",
          };
      });
    });

    GrouparooCLI.setGrouparooRunMode(this);
  }

  async run({ params }) {
    GrouparooCLI.logCLI(this);

    if (process.argv.slice(2).includes("--list")) {
      await this.list();
    } else {
      await this.generate(params);
    }

    return true;
  }

  async generate(params) {
    if (!params.template) {
      this.fatalError(
        `--template is required.  Learn more with \`grouparoo generate --help\` and \`grouparoo generate --list\``
      );
    }

    const templates = ConfigTemplateUtils.loadTemplates();
    const template = templates.find((t) => t.name === params.template);
    if (!template) {
      this.fatalError(`template for "${params.template}" not found`);
    }

    const fileData = await template.run({
      params: template.assignDefaults(params),
    });

    Object.keys(fileData).forEach((filename) => {
      if (
        process.argv.slice(2).includes("--overwrite") ||
        !fs.existsSync(filename)
      ) {
        fs.mkdirpSync(path.dirname(filename));
        fs.writeFileSync(filename, prettier.format(fileData[filename]));
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
  }

  fatalError(message: string) {
    console.log("❌ " + message);
    process.exit(1);
  }
}
