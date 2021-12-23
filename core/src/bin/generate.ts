import { GrouparooCLI } from "../modules/cli";
import Colors from "colors/safe";
import {
  ConfigTemplate,
  ConfigTemplateParams,
  ConfigTemplateRunResponse,
} from "../classes/configTemplate";
import { CLI, api, ParamsFrom } from "actionhero";
import path from "path";
import fs from "fs-extra";
import prettier from "prettier";
import { getConfigDir } from "../modules/pluginDetails";
import { Deprecation } from "../modules/deprecation";

export class Generate extends CLI {
  name = "generate [template] [id]"; // I will include the template ARG vs OPT
  description = `Generate new code config files from templates. ${
    process.argv.slice(2).includes("generate") // we want to add more to the description, but not in the top-level "help"
      ? `

Commands:
[options]   See "Options" section below.
[template]  Name of the template. This is a starting point for building your configuration.
            Use --list for a list of available templates.
[id]        A unique ID used to link items created from templates.
            The value must be unique, using lower case letters and underscores only.`
      : ""
  }`;
  inputs = {
    list: {
      required: false,
      default: false,
      letter: "l",
      flag: true,
      description:
        'Display the available config templates to use with config-generate.  You can filter the list of templates by providing a string to match against, ie: `grouparoo generate app --list` to see templates which match "app"',
    },
    describe: {
      required: false,
      default: false,
      letter: "d",
      flag: true,
      description: "Display the options for the template in detail",
    },
    parent: {
      required: false,
      letter: "p",
      description:
        "The id of the object that is the direct parent of this new object, e.g. the appId if you are creating a new Source.",
    },
    from: {
      required: false,
      letter: "f",
      description:
        "For batch generators, where should we read the objects from?",
    },
    with: {
      required: false,
      letter: "w",
      description:
        'For batch generators, what additional objects should we create? Use commas to separate names (--with "id,first_name,last_name") or "*" for all (`--with "*"`). Default is ``',
      default: "",
    },
    mapping: {
      required: false,
      letter: "m",
      description:
        'For batch generators, how should we map this object? The remote key precedes the Grouparoo Property name. Use = to set the pair (--mapping "id=user_id").',
    },
    "high-water-mark": {
      required: false,
      letter: "H",
      description:
        "For batch generators, what should we use for the high-water-mark?",
    },
    "sync-mode": {
      required: false,
      letter: "s",
      description:
        "For destination generators, how will we sync to the destination?",
    },
    overwrite: {
      required: true,
      default: false,
      letter: "o",
      flag: true,
      description: "Overwrite existing files?",
    },
  };
  example = `App generation:
  grouparoo generate postgres:app data_warehouse

Simple Source Generation (needs parent app):
  grouparoo generate postgres:table:source users_table \\
    --parent data_warehouse

Batch Source Generation (needs parent app to be applied first):
  grouparoo generate postgres:table:source users_table \\
    --parent data_warehouse \\
    --from users \\
    --with id,first_name,email,last_name \\
    --mapping 'id=user_id' \\
    --high-water-mark updated_at

Learn more about the options for a specific template:
  grouparoo generate postgres:app --describe`;

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  async run({
    params,
  }: {
    params: ParamsFrom<Generate> & {
      template: string;
      id: string;
      path?: string;
      _arguments: string[];
    };
  }) {
    Deprecation.warnReplaced("CLI", "grouparoo generate", "UI config");

    const [template, id] = params._arguments || [];
    if (template) params.template = template;
    if (id) params.id = id;
    params.path = await getConfigDir(true);

    GrouparooCLI.logCLI(
      this.name
        .replace(" [template]", params.template ? " " + params.template : "")
        .replace(" [id]", params.id ? " " + params.id : "")
    );

    if (params.list) {
      await this.list(params);
    } else if (params.describe) {
      await this.describe(params);
    } else {
      await this.generate(params);
    }

    return true;
  }

  async describe(
    params: ParamsFrom<Generate> & {
      template: string;
    }
  ) {
    if (!params.template) {
      return GrouparooCLI.logger.fatal(`no template provided`);
    }

    const template = await this.getTemplate(params.template);
    this.logTemplateAndOptions(template);
  }

  async generate(
    params: ParamsFrom<Generate> & {
      template: string;
      id: string;
    }
  ) {
    const learnMoreText =
      "Learn more with `grouparoo generate --help`, `grouparoo generate --list`, and `grouparoo generate [template] --describe`";

    if (!params.template) {
      return GrouparooCLI.logger.fatal(
        `template is required. ${learnMoreText}`
      );
    }
    if (!params.id) {
      return GrouparooCLI.logger.fatal(`id is required. ${learnMoreText}`);
    }

    const template = await this.getTemplate(params.template);

    let preparedParams: ConfigTemplateParams;
    try {
      preparedParams = template.prepareParams({ ...params });
    } catch (error) {
      return GrouparooCLI.logger.fatal(error);
    }

    if (preparedParams.id.toString().replace(/['"]+/g, "") !== params.id) {
      GrouparooCLI.logger.log(
        `${Colors.yellow("notice")}: ID was changed to ${preparedParams.id}`
      );
    }

    let fileData: ConfigTemplateRunResponse = {};
    try {
      fileData = await template.run({ params: preparedParams });
    } catch (error) {
      return GrouparooCLI.logger.fatal(error.message);
    }

    Object.keys(fileData).forEach((filename) => {
      if (params.overwrite || !fs.existsSync(filename)) {
        fs.mkdirpSync(path.dirname(filename));
        fs.writeFileSync(
          filename,
          prettier.format(fileData[filename], { parser: "babel" })
        );
        GrouparooCLI.logger.log(`✅ wrote ${filename}`);
      } else {
        return GrouparooCLI.logger.fatal(`${filename} already exists`);
      }
    });
  }

  async list(
    params: ParamsFrom<Generate> & {
      template: string;
    }
  ) {
    GrouparooCLI.logger.log(
      `Available Templates:${
        params.template ? ` matching "${params.template}"` : ""
      }`
    );
    GrouparooCLI.logger.log("");

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
      GrouparooCLI.logger.log("");
      GrouparooCLI.logger.log(
        "You can filter this list by providing a (partial) template to match template names against. (e.g. `grouparoo generate postgres --list`)"
      );
    }
    GrouparooCLI.logger.log(
      "\nYou can add plugins to this project to connect to new Sources and Destinations and add additional commands with the `grouparoo install` command."
    );
  }

  async getTemplate(templateName: string) {
    const templates = api.plugins.templates();
    const template = templates.find((t) => t.name === templateName);
    if (!template) {
      GrouparooCLI.logger.fatal(`template for "${templateName}" not found`);
    }
    return template;
  }

  logTemplateAndOptions(template: ConfigTemplate, compact = false) {
    const inputs = template.inputs;

    if (!inputs["id"]) {
      inputs["id"] = {
        required: true,
        description: "The id to use for this new object.",
      };
    }

    if (compact) {
      GrouparooCLI.logger.log(
        "  " +
          GrouparooCLI.logger.underlineBold(template.name) +
          ` (${Object.keys(inputs).join(", ")}) - ${template.description}`
      );
    } else {
      const requiredInputs = Object.keys(template.inputs)
        .filter((i) => template.inputs[i].required)
        .filter((i) => i !== "id")
        .sort();
      const optionalInputs = Object.keys(template.inputs)
        .filter((i) => !template.inputs[i].required)
        .sort();

      function displayInput(k: string) {
        const req =
          inputs[k].required &&
          (inputs[k].default === null || inputs[k].default === undefined);

        GrouparooCLI.logger.log(
          `  * ${k}${req ? " (required)" : ""} - ${inputs[k].description} ${
            inputs[k].default !== null && inputs[k].default !== undefined
              ? `(default: ${JSON.stringify(inputs[k].default)})`
              : ""
          }${
            inputs[k].copyDefaultFrom
              ? `(default copied from ${inputs[k].copyDefaultFrom})`
              : ""
          }`
        );
      }

      GrouparooCLI.logger.log(`${template.description}`);
      GrouparooCLI.logger.log("");

      if (template.inputs.id) {
        GrouparooCLI.logger.log("Required Arguments:");
        GrouparooCLI.logger.log(`  * id (required) - ${inputs.id.description}`);
        GrouparooCLI.logger.log("");
      }

      GrouparooCLI.logger.log("Required Options:");
      requiredInputs.length > 0
        ? requiredInputs.forEach((k) => displayInput(k))
        : GrouparooCLI.logger.log("  None");
      GrouparooCLI.logger.log("");
      GrouparooCLI.logger.log("Optional Options:");
      optionalInputs.length > 0
        ? optionalInputs.forEach((k) => displayInput(k))
        : GrouparooCLI.logger.log("  None");
      GrouparooCLI.logger.log("");
    }
  }
}
