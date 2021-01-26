import {
  ConfigurationObject,
  validateAndFormatGuid,
  extractNonNullParts,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  GuidsByClass,
  getParentByName,
} from "../../classes/codeConfig";
import { Op } from "sequelize";
import { App, Source, Property } from "../..";
import { loadSource } from "./source";
import { loadSchedule } from "./schedule";

// TODO: lots of things!
// because this is so dynamic the "providedIds" in getParentIds isn't right for proeprties, bootstrap, source, destination, schedule, etc
// equilavent of validateConfigObjectKeys(Source, configObject); for this whole thing to freak out if not applicable

interface SyncTableContext {
  rootId: string;
  rootName: string;
  configObject: ConfigurationObject;
  externallyValidate: boolean;
  validate: boolean;
}

export async function loadSyncTable(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate: boolean = false
): Promise<GuidsByClass> {
  const seenGuids: GuidsByClass = {
    source: [],
    property: [],
    schedule: [],
    destination: [],
  };

  const rootId = configObject.id;
  await validateAndFormatGuid(Source, rootId); // model not used
  const rootName = configObject.name || rootId;

  const context: SyncTableContext = {
    rootId,
    rootName,
    configObject,
    externallyValidate,
    validate,
  };

  const source = await buildSource(context);
  merge(seenGuids, source);

  return seenGuids;
}

function merge(seenGuids: GuidsByClass, guids: GuidsByClass) {
  for (const className in guids) {
    const newGuids = guids[className];
    seenGuids[className].push(...newGuids);
  }
}

export async function buildSource(
  context: SyncTableContext
): Promise<GuidsByClass> {
  const seenGuids: GuidsByClass = {
    source: [],
    property: [],
    schedule: [],
  };

  const config = context.configObject.source;
  const { rootId, rootName } = context;

  // fill out defaults
  config.id = config.id || `${rootId}_source`;
  config.name = config.name || `${rootName} Source`;

  if (!config.appId) {
    throw new Error("source.appId is required");
  }
  const app: App = await getParentByName(App, config.appId);
  config.type = config.type || `${app.type}-table-import`; // e.g. postgres-table-import

  if (!config.table) {
    throw new Error("source.table is required");
  }
  config.options = config.options || {};
  config.options.table = config.table;

  let bootstrapId: string = null;
  if (!config.mapping) {
    if (!config.userKeyColumn) {
      throw new Error("source.primaryKeyColumn is required");
    }
    // userKeyMapping is an existing property in system
    if (!config.userKeyMapping) {
      // need to use bootstrap, but use it if it there
      if (config.bootstrappedProperty) {
        config.userKeyMapping = config.bootstrappedProperty.id;
      } else {
        bootstrapId = `${rootId}_property_${config.userKeyColumn}`;
        config.userKeyMapping = bootstrapId;
      }
    }

    config.mapping = {
      [config.userKeyColumn]: config.userKeyMapping,
    };
  }

  if (bootstrapId) {
    config.bootstrappedProperty = {
      name: `${rootId}_${config.userKeyColumn}`,
      type: "integer", // TODO: have to figure out types for properties
      id: bootstrapId,
      options: {
        column: config.userKeyColumn,
      },
    };
  }

  let schedule = true;
  if (`${config.highWaterColumn}` === "false") {
    schedule = false;
  } else if (!config.highWaterColumn && !config?.schedule?.options?.column) {
    throw new Error("source.highWaterColumn is required");
  }

  const sourceConfig = Object.assign({}, config);
  delete sourceConfig.table;
  delete sourceConfig.userKeyColumn;
  delete sourceConfig.userKeyMapping;
  delete sourceConfig.highWaterColumn;
  delete sourceConfig.schedule;

  const { externallyValidate, validate } = context;
  const source = await loadSource(sourceConfig, externallyValidate, validate);
  merge(seenGuids, source);

  if (seenGuids.source.length === 0) {
    throw new Error("source not created");
  }
  if (seenGuids.source.length > 1) {
    throw new Error("multiple sources created");
  }

  if (schedule) {
    if (!config.schedule) {
      config.schedule = {};
    }

    const recurring = Object.keys(config.schedule).includes("recurring")
      ? config.schedule.recurring
      : true;
    config.schedule.id = config.schedule.id || `${rootId}_schedule`;
    config.schedule.name = config.schedule.name || `${rootName} Schedule`;
    config.schedule.class = config.schedule.class || "Schedule";
    config.schedule.sourceId = config.id;
    config.schedule.recurring = recurring;
    config.schedule.recurringFrequency =
      config.schedule.recurringFrequency || 15 * 60 * 1000;
    config.schedule.options = config.schedule.options || {
      column: config.highWaterColumn,
    };

    const scheduleConfig = Object.assign({}, config.schedule);
    const schedule = await loadSchedule(
      scheduleConfig,
      externallyValidate,
      validate
    );
    merge(seenGuids, schedule);
  }

  return seenGuids;
}
