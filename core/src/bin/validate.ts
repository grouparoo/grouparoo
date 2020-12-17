import { CLI, api, log } from "actionhero";
import {
  ConfigurationObject,
  sortConfigurationObject,
} from "../classes/codeConfig";
import {
  getConfigDir,
  loadConfigObjects,
  processConfigObjects,
} from "../modules/configLoaders";
import { Transaction } from "sequelize";

export class Validate extends CLI {
  constructor() {
    super();
    this.name = "validate";
    this.description = "Validate your code config";
    this.inputs = {
      "only-local": { required: false, default: false },
    };
  }

  async run() {
    api.plugins.announcePlugins();

    const configDir = getConfigDir();
    let configObjects: ConfigurationObject[];

    // Can we read the config directory?  Is the JSON/JS valid?
    try {
      const loadResponse = await loadConfigObjects(configDir);
      configObjects = sortConfigurationObject(loadResponse.configObjects);
    } catch (error) {
      logFatalError(
        `error loading config from ${configDir}: \r\n\r\n${error.stack}`
      );
    }

    log(`validating ${configObjects.length} objects...`);

    const transaction: Transaction = await api.sequelize.transaction();

    try {
      const { errors } = await processConfigObjects(configObjects, transaction);
      if (errors.length > 0) {
        logFatalError(
          `❌ Validation failed - ${errors.length} validation error${
            errors.length > 0 ? "s" : ""
          }`
        );
      } else {
        log(
          `✅ Validation succeeded - ${configObjects.length} config objects OK!`
        );
      }
    } catch (e) {
      // error will already be logged; nothing to do here
    } finally {
      await transaction.rollback();
    }

    return true;
  }
}

function logFatalError(message) {
  log(message, "error");
  process.exit(1);
}
