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
import { App, Source, Property } from "../..";
import { loadSource } from "./source";
import { loadSchedule } from "./schedule";
import { loadProperty } from "./property";
import { OptionHelper } from "../optionHelper";

// TODO: lots of things!
// because this is so dynamic the "providedIds" in getParentIds isn't right for proeprties, bootstrap, source, destination, schedule, etc
// equilavent of validateConfigObjectKeys(Source, configObject); for this whole thing to freak out if not applicable

interface columnTypes {
  [colName: string]: string;
}

interface SyncTableContext {
  rootId: string;
  rootName: string;
  configObject: ConfigurationObject;
  externallyValidate: boolean;
  validate: boolean;
  sourceApp: App;
  sourceTable: string;
  sourceType: string;
  columnTypes: columnTypes;
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

  const source = configObject.source;
  if (!source) {
    throw new Error("source is required");
  }
  if (!source.appId) {
    throw new Error("source.appId is required");
  }
  const sourceApp: App = await getParentByName(App, source.appId);
  if (!source.table) {
    throw new Error("source.table is required");
  }
  const sourceTable = source.table;
  const sourceType = source.type || `${sourceApp.type}-table-import`; // e.g. postgres-table-import

  const columnTypes = await getColumnTypes(sourceApp, sourceType, sourceTable);

  const context: SyncTableContext = {
    rootId,
    rootName,
    configObject,
    externallyValidate,
    validate,
    sourceApp,
    sourceTable,
    sourceType,
    columnTypes,
  };

  merge(seenGuids, await buildSource(context));
  merge(seenGuids, await buildProperties(context));

  return seenGuids;
}

function merge(seenGuids: GuidsByClass, guids: GuidsByClass) {
  for (const className in guids) {
    const newGuids = guids[className];
    seenGuids[className].push(...newGuids);
  }
}

async function getColumnTypes(
  sourceApp: App,
  sourceType: string,
  sourceTable: string
): Promise<columnTypes> {
  const { pluginConnection } = OptionHelper.getPluginByType(sourceType);
  if (!pluginConnection) {
    throw new Error(`cannot find a pluginConnection for type ${sourceType}`);
  }
  const getColumns = (pluginConnection.methods || {})["getColumns"];
  if (!getColumns) {
    throw new Error(
      `${sourceType} source is not configured to be automatically synced`
    );
  }

  const columnDefinitionMap = await getColumnDefinitions(
    sourceApp,
    sourceTable,
    getColumns
  );

  const types: columnTypes = {};
  for (const colName in columnDefinitionMap) {
    types[colName.toLowerCase()] = columnDefinitionMap[colName].type;
  }
  return types;
}

async function getColumnDefinitions(
  app: App,
  tableName: string,
  getColumns
): Promise<any> {
  let result: any = null;

  const { pluginApp } = await app.getPlugin();
  if (!pluginApp) {
    throw new Error(`cannot find a pluginApp type of ${app.type}`);
  }

  let options = await app.getOptions(true);
  options = OptionHelper.sourceEnvironmentVariableOptions(app, options);

  let connection;
  try {
    if (pluginApp.methods.connect) {
      connection = await pluginApp.methods.connect({
        app,
        appGuid: app.guid,
        appOptions: options,
      });
    }

    result = await getColumns({
      connection,
      appOptions: options,
      appGuid: app.guid,
      tableName,
    });
  } catch (err) {
    throw err;
  } finally {
    if (connection && pluginApp.methods.disconnect) {
      await pluginApp.methods.disconnect({
        connection,
        app,
        appGuid: app.guid,
        appOptions: options,
      });
    }
  }

  return result;
}

export async function pluginOptions(property: Property) {
  const source = await property.$get("source", { scope: null });
  const { pluginConnection } = await source.getPlugin();

  const response: Array<{
    key: string;
    displayName?: string;
    description: string;
    required: boolean;
    type: string;
    options: Array<{
      key: string;
      description?: string;
      examples?: Array<any>;
    }>;
  }> = [];
  const app = await App.findByGuid(source.appGuid);
  const connection = await app.getConnection();
  const appOptions = await app.getOptions(true);
  const sourceOptions = await source.getOptions(true);
  const sourceMapping = await source.getMapping();

  for (const i in pluginConnection.propertyOptions) {
    const opt = pluginConnection.propertyOptions[i];
    const options = await opt.options({
      connection,
      app,
      appGuid: app.guid,
      appOptions,
      source,
      sourceGuid: source.guid,
      sourceOptions,
      sourceMapping,
      property,
      propertyGuid: property.guid,
    });

    response.push({
      key: opt.key,
      displayName: opt.displayName,
      description: opt.description,
      required: opt.required,
      type: opt.type,
      options,
    });
  }

  return response;
}

async function buildSource(context: SyncTableContext): Promise<GuidsByClass> {
  const seenGuids: GuidsByClass = {
    source: [],
    property: [],
    schedule: [],
  };

  const source = context.configObject.source;
  const { rootId, rootName, sourceTable, sourceType, columnTypes } = context;

  // fill out defaults
  source.id = source.id || `${rootId}_source`;
  source.name = source.name || `${rootName} Source`;

  source.type = sourceType;

  source.options = source.options || {};
  source.options.table = sourceTable;

  let bootstrapId: string = null;
  if (!source.mapping) {
    if (!source.userKeyColumn) {
      throw new Error("source.primaryKeyColumn is required");
    }
    // userKeyMapping is an existing property in system
    if (!source.userKeyMapping) {
      // need to use bootstrap, but use it if it there
      if (source.bootstrappedProperty) {
        source.userKeyMapping = source.bootstrappedProperty.id;
      } else {
        bootstrapId = `${rootId}_property_${source.userKeyColumn.toLowerCase()}`;
        source.userKeyMapping = bootstrapId;
      }
    }

    source.mapping = {
      [source.userKeyColumn]: source.userKeyMapping,
    };
  }

  if (bootstrapId) {
    const type = columnTypes[source.userKeyColumn.toLowerCase()];
    if (type === undefined) {
      throw new Error(`unknown source column: ${source.userKeyColumn}`);
    }
    if (!type) {
      throw new Error(
        `use source.bootstrappedProperty to define type for ${source.userKeyColumn}`
      );
    }
    source.bootstrappedProperty = {
      name: `${rootId}_${source.userKeyColumn.toLowerCase()}`,
      type,
      id: bootstrapId,
      options: {
        column: source.userKeyColumn,
      },
    };
  }

  let makeSchedule = true;
  if (`${source.highWaterColumn}` === "false") {
    makeSchedule = false;
  } else if (!source.highWaterColumn && !source?.schedule?.options?.column) {
    throw new Error("source.highWaterColumn is required");
  }

  const sourceConfig = Object.assign({}, source);
  delete sourceConfig.table;
  delete sourceConfig.userKeyColumn;
  delete sourceConfig.userKeyMapping;
  delete sourceConfig.highWaterColumn;
  delete sourceConfig.schedule;

  const { externallyValidate, validate } = context;
  merge(
    seenGuids,
    await loadSource(sourceConfig, externallyValidate, validate)
  );

  if (seenGuids.source.length === 0) {
    throw new Error("source not created");
  }
  if (seenGuids.source.length > 1) {
    throw new Error("multiple sources created");
  }

  if (makeSchedule) {
    if (!source.schedule) {
      source.schedule = {};
    }
    const schedule = source.schedule;

    const recurring = Object.keys(schedule).includes("recurring")
      ? schedule.recurring
      : true;
    schedule.id = schedule.id || `${rootId}_schedule`;
    schedule.name = schedule.name || `${rootName} Schedule`;
    schedule.class = schedule.class || "Schedule";
    schedule.sourceId = source.id;
    schedule.recurring = recurring;
    schedule.recurringFrequency = schedule.recurringFrequency || 15 * 60 * 1000;
    schedule.options = schedule.options || {
      column: source.highWaterColumn,
    };

    const scheduleConfig = Object.assign({}, schedule);
    merge(
      seenGuids,
      await loadSchedule(scheduleConfig, externallyValidate, validate)
    );
  }

  return seenGuids;
}

async function buildProperties(
  context: SyncTableContext
): Promise<GuidsByClass> {
  const seenGuids: GuidsByClass = {
    property: [],
  };

  const sync = context.configObject.sync;
  const source = context.configObject.source;
  const { rootId, columnTypes } = context;

  if (!sync) {
    throw new Error("sync properties are required");
  }
  if (!source) {
    throw new Error("source is required");
  }

  let syncMap = {};
  if (Array.isArray(sync)) {
    // top level is an array, normalize
    for (const item of sync) {
      if (typeof item === "object") {
        // this is map from destination key to property values
        for (const destKey in item) {
          syncMap[destKey] = item[destKey];
        }
      } else if (typeof item === "string") {
        // simple string that means they are the same
        syncMap[item] = item;
      } else {
        throw new Error(`Uknown sync item: ${item}`);
      }
    }
  } else {
    syncMap = sync;
  }

  // expand it if needed
  for (const destKey in syncMap) {
    const value = syncMap[destKey];
    let property: any;
    if (typeof value === "string") {
      property = { column: value };
    } else if (typeof value === "object") {
      property = value;
    } else {
      throw new Error(`Unknown sync value for ${destKey}`);
    }

    if (!property.column) {
      throw new Error(`Unkown sync column name for ${destKey}`);
    }

    property.id =
      property.id || `${rootId}_property_${property.column.toLowerCase()}`;
    property.name =
      property.name || `${rootId}_${property.column.toLowerCase()}`;
    property.class = property.class || "Property";
    property.sourceId = source.id;
    property.options = property.options || {};
    property.options.column = property.options.column || property.column;
    property.options.aggregationMethod =
      property.options.aggregationMethod || "exact";
    if (!property.type) {
      const type = columnTypes[property.column.toLowerCase()];
      if (type === undefined) {
        throw new Error(
          `unknown sync column for ${destKey}: ${property.column}`
        );
      }
      if (!type) {
        throw new Error(
          `define type for sync ${destKey} and column ${property.column}`
        );
      }
      property.type = type;
    }

    syncMap[destKey] = property;
  }

  context.configObject.sync = syncMap; // put back more complete one

  // make each
  const { externallyValidate, validate } = context;
  for (const destKey in syncMap) {
    const propertyConfig = Object.assign({}, syncMap[destKey]);

    // skip it if it it's the one that bootstrapped
    if (source?.bootstrappedProperty?.id === propertyConfig.id) {
      continue;
    }

    delete propertyConfig.column;
    merge(
      seenGuids,
      await loadProperty(propertyConfig, externallyValidate, validate)
    );
  }
  return seenGuids;
}
