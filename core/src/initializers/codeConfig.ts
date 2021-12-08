import { api, log, Initializer } from "actionhero";
import { loadConfigDirectory } from "../modules/configLoaders";
import { getConfigDir } from "../modules/pluginDetails";
import { GrouparooModel } from "../models/GrouparooModel";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { RecordOps } from "../modules/ops/record";
import { CLS } from "../modules/cls";

declare module "actionhero" {
  export interface Api {
    codeConfig: {
      allowLockedModelChanges: boolean;
    };
  }
}

export class CodeConfig extends Initializer {
  constructor() {
    super();
    this.name = "codeConfig";
    this.loadPriority = 10000;
    this.startPriority = 10;
  }

  async initialize() {
    api.codeConfig = {
      allowLockedModelChanges: true,
    };
  }

  async start() {
    await CLS.wrap(async () => {
      const configDir = await getConfigDir(
        process.env.GROUPAROO_RUN_MODE === "cli:config"
      );
      const { errors } = await loadConfigDirectory(configDir);
      if (errors.length > 0)
        throw new Error("code config error: " + errors.join("; "));
    });

    api.codeConfig.allowLockedModelChanges = false; // after this point in the Actionhero boot lifecycle, locked models cannot be changed
    await loadSampleProfiles();
  }

  async stop() {}
}

async function loadSampleProfiles() {
  if (process.env.GROUPAROO_RUN_MODE !== "cli:config") return;

  const models = await GrouparooModel.findAll();
  for (const model of models) {
    const records = await GrouparooRecord.findAll({
      where: { modelId: model.id },
    });
    if (records.length === 0) continue;

    log(
      `importing ${records.length} sample records from the ${model.name} model`
    );

    const responses = await RecordOps.opportunisticallyImportAndUpdateInline(
      records
    );
    log(
      `imported ${responses.filter((r) => r.success).length}/${
        records.length
      } sample records from the ${model.name} model`
    );
    for (const { recordId, success, error } of responses) {
      if (!success) {
        log(
          `  - error importing sample record ${recordId} - ${error}`,
          "error"
        );
      }
    }
  }
}
