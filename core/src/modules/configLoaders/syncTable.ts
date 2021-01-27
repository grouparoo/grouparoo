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
import { loadGroup } from "./group";
import { loadDestination } from "./destination";

// TODO:
// because this is so dynamic the "providedIds" in getParentIds isn't right for properties, bootstrap, source, destination, schedule, etc
// equilavent of validateConfigObjectKeys(Source, configObject); for this whole thing to freak out if not applicable. is this important?
// boostrapping makes the propety identifying, but there might already be one.

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

export async function expandSyncTable(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate: boolean = false
): Promise<ConfigurationObject[]> {
  const out: ConfigurationObject[] = [];

  const rootId = configObject.id;
  await validateAndFormatGuid(Source, rootId); // model actually not used
  const rootName = configObject.name || rootId;

  const source = configObject.source;
  if (!source) {
    throw new Error("source is required");
  }
  if (!source.appId) {
    throw new Error("source.appId is required");
  }
  if (!source.table) {
    throw new Error("source.table is required");
  }
  if (!source.userKeyColumn) {
    throw new Error("source.userKeyColumn is required");
  }

  const sync = configObject.sync;
  if (!sync) {
    throw new Error("sync properties are required");
  }

  const destination = configObject.destination;
  if (!destination) {
    throw new Error("destination is required");
  }
  if (!destination.type) {
    throw new Error("destination.type is required");
  }
  if (!destination.appId) {
    throw new Error("destination.appId is required");
  }

  // --------------- Source Data

  const sourceApp: App = await getParentByName(App, source.appId);

  const sourceTable = source.table;
  const sourceType = source.type || `${sourceApp.type}-table-import`; // e.g. postgres-table-import
  const userKeyColumn = source.userKeyColumn;

  const columnTypes = await getColumnTypes(sourceApp, sourceType, sourceTable);

  // -------------------- Source

  const sourceDefault: ConfigurationObject = {
    id: `${rootId}_source`,
    name: `${rootName} Source`,
    class: "Source",
    type: sourceType,
    options: {
      table: sourceTable,
    },
  };

  let bootstrapId: string = null;
  if (!source.mapping) {
    // userKeyMapsToPropertyId is an existing property in system
    let mappingKey = source.userKeyMapsToPropertyId;
    if (!mappingKey) {
      // need to use bootstrap, but use it if it there
      if (source.bootstrappedProperty) {
        mappingKey = source.bootstrappedProperty.id;
      } else {
        bootstrapId = `${rootId}_property_${userKeyColumn.toLowerCase()}`;
        mappingKey = bootstrapId;
      }
    }
    sourceDefault.mapping = { [userKeyColumn]: mappingKey };
  }

  if (bootstrapId) {
    const type = columnTypes[userKeyColumn.toLowerCase()];
    if (type === undefined) {
      throw new Error(`unknown source column: ${userKeyColumn}`);
    }
    if (!type) {
      throw new Error(
        `use source.bootstrappedProperty to define type for ${userKeyColumn}`
      );
    }
    sourceDefault.bootstrappedProperty = {
      name: `${rootId}_${userKeyColumn.toLowerCase()}`,
      type,
      id: bootstrapId,
      options: {
        column: userKeyColumn,
      },
    };
  }

  const sourceConfig = configure(source, sourceDefault, [
    "table",
    "userKeyColumn",
    "userKeyMapsToPropertyId",
    "highWaterColumn",
    "schedule",
    "recurringFrequency",
    "identityProperty",
  ]);
  const sourceId = sourceConfig.id;
  out.push(sourceConfig);

  // ------------------- Schedule

  let makeSchedule = true;
  if (`${source.highWaterColumn}` === "false") {
    makeSchedule = false;
  } else if (!source.highWaterColumn && !source?.schedule?.options?.column) {
    throw new Error("source.highWaterColumn is required");
  }

  if (makeSchedule) {
    const scheduleDefault = {
      id: `${rootId}_schedule`,
      name: `${rootName} Schedule`,
      class: "Schedule",
      recurring: true,
      sourceId: sourceId,
      recurringFrequency: source.recurringFrequency || 15 * 60 * 1000, // 15 min
      options: {
        column: source.highWaterColumn,
      },
    };
    out.push(configure(source.schedule, scheduleDefault, []));
  }

  // -------------- Sync columns normalization

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
    // let columnName: string;
    // let propertyType: string = null;
    let property;
    if (typeof value === "string") {
      property = { column: value };
    } else if (typeof value === "object") {
      property = value;
    } else {
      throw new Error(`Unknown sync value for ${destKey}`);
    }
    const columnName = property.column;
    if (!property.column) {
      throw new Error(`Unkown sync column for ${destKey}`);
    }

    const propertyDefault: ConfigurationObject = {
      id: `${rootId}_property_${columnName.toLowerCase()}`,
      name: `${rootId}_${columnName.toLowerCase()}`,
      class: "Propety",
      sourceId: sourceId,
      options: {
        aggregationMethod: "exact",
        column: columnName,
      },
    };

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
      propertyDefault.type = type;
    }
    syncMap[destKey] = configure(property, propertyDefault, ["column"]);
  }

  // ----- Properties from sync

  for (const destKey in syncMap) {
    const propertyConfig = syncMap[destKey];
    // skip it if it it's the one that bootstrapped
    if (sourceConfig?.bootstrappedProperty?.id === propertyConfig.id) {
      continue;
    }

    out.push(propertyConfig);
  }

  // -------------- membership property

  const identityPropertyDefault = {
    id: `${rootId}_membership`,
    name: `${rootId}_membership`,
    class: "Property",
    sourceId: sourceId,
    options: {
      aggregationMethod: "count",
      column: userKeyColumn,
    },
    type: "integer",
  };

  const identityPropertConfig = configure(
    source.identityProperty,
    identityPropertyDefault,
    []
  );
  out.push(identityPropertConfig);

  // -------------- Group

  const groupDefault = {
    id: `${rootId}_group`,
    name: rootName,
    class: "Group",
    type: "calculated",
    rules: [
      {
        key: identityPropertConfig.key || identityPropertConfig.name, // it allows either in this order
        operation: { op: "gt" },
        match: "0",
      },
    ],
  };

  const groupConfig = configure(configObject.group, groupDefault, []);
  out.push(groupConfig);

  // -------------- Destination

  const destinationDefault = {
    id: `${rootId}_destination`,
    name: `${rootName} Destination`,
    class: "Destination",
    groupId: groupConfig.id,
    destinationGroupMemberships: {},
    mapping: {},
  };

  const destinationConfig = configure(destination, destinationDefault, []);

  // add in mappings
  for (const destKey in syncMap) {
    destination.mapping[destKey] = syncMap[destKey].id;
  }

  out.push(destinationConfig);

  // -------------- return configurations

  return out;
}

function configure(
  given: any,
  defaults: any,
  removeProperties: string[]
): ConfigurationObject {
  const copy: ConfigurationObject = Object.assign({}, defaults, given || {});
  for (const prop of removeProperties) {
    delete copy[prop];
  }
  return copy;
}

// -----------------------------

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
    group: [],
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
  merge(seenGuids, await buildGroup(context));
  merge(seenGuids, await buildDestination(context));

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
      throw new Error("source.userKeyColumn is required");
    }
    // userKeyMapsToPropertyId is an existing property in system
    if (!source.userKeyMapsToPropertyId) {
      // need to use bootstrap, but use it if it there
      if (source.bootstrappedProperty) {
        source.userKeyMapsToPropertyId = source.bootstrappedProperty.id;
      } else {
        bootstrapId = `${rootId}_property_${source.userKeyColumn.toLowerCase()}`;
        source.userKeyMapsToPropertyId = bootstrapId;
      }
    }

    source.mapping = {
      [source.userKeyColumn]: source.userKeyMapsToPropertyId,
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
  delete sourceConfig.userKeyMapsToPropertyId;
  delete sourceConfig.highWaterColumn;
  delete sourceConfig.schedule;
  delete sourceConfig.recurringFrequency;
  delete sourceConfig.identityProperty;

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
    schedule.recurringFrequency =
      schedule.recurringFrequency ||
      source.recurringFrequency ||
      15 * 60 * 1000;
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
    // note: filling out propety.key as well in same order as loadProperty
    property.name =
      property.name || `${rootId}_${property.column.toLowerCase()}`;
    property.key = property.key || property.name;

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

async function buildGroup(context: SyncTableContext): Promise<GuidsByClass> {
  const seenGuids: GuidsByClass = {
    property: [],
    group: [],
  };

  const source = context.configObject.source;
  const { rootId, rootName } = context;

  if (!source) {
    throw new Error("source is required");
  }

  if (!source.identityProperty) {
    source.identityProperty = {};
  }

  const property = source.identityProperty;
  property.id = property.id || `${rootId}_membership`;
  // note: filling out propety.key as well in same order as loadProperty
  property.name = property.name || `${rootId}_membership`;
  property.key = property.key || property.name;

  property.class = property.class || "Property";
  property.sourceId = source.id;
  property.options = property.options || {};
  if (!property.options.column) {
    if (!source.userKeyColumn) {
      throw new Error("source.userKeyColumn is required");
    }
    property.options.column = source.userKeyColumn;
  }
  property.options.aggregationMethod =
    property.options.aggregationMethod || "count";
  property.type = property.type || "integer";

  const { externallyValidate, validate } = context;

  const propertyConfig = Object.assign({}, property);
  merge(
    seenGuids,
    await loadProperty(propertyConfig, externallyValidate, validate)
  );

  // now make the group of that.
  let group = context.configObject.group;
  if (!group) {
    group = {};
    context.configObject.group = group;
  }

  group.id = group.id || `${rootId}_group`;
  group.name = group.name || `${rootName}`;
  group.class = group.class || "Group";
  group.type = group.type || "calculated";
  if (!group.rules) {
    group.rules = [
      {
        key: property.key,
        operation: { op: "gt" },
        match: "0",
      },
    ];
  }

  const groupConfig = Object.assign({}, group);
  merge(seenGuids, await loadGroup(groupConfig, externallyValidate, validate));

  return seenGuids;
}

async function buildDestination(
  context: SyncTableContext
): Promise<GuidsByClass> {
  const seenGuids: GuidsByClass = {
    destination: [],
  };

  const destination = context.configObject.destination;
  const sync = context.configObject.sync;
  const group = context.configObject.group;
  const { rootId, rootName } = context;

  if (!destination) {
    throw new Error("destination is required");
  }
  if (!sync) {
    throw new Error("sync properties are required");
  }
  if (!group) {
    throw new Error("group is required");
  }

  destination.id = destination.id || `${rootId}_destination`;
  destination.name = destination.name || `${rootName} Destination`;
  destination.class = destination.class || "Destination";

  if (!destination.type) {
    throw new Error("destination.type is required");
  }
  // it also needs corresponding options

  if (!destination.appId) {
    throw new Error("destination.appId is required");
  }

  destination.groupId = destination.groupId || group.id;

  // allows adding in groups
  if (!destination.destinationGroupMemberships) {
    destination.destinationGroupMemberships = {};
  }

  if (!destination.mapping) {
    destination.mapping = {};
  }
  for (const destKey in sync) {
    // now normalized
    destination.mapping[destKey] = sync[destKey].id;
  }

  const { externallyValidate, validate } = context;
  const destinationConfig = Object.assign({}, destination);
  merge(
    seenGuids,
    await loadDestination(destinationConfig, externallyValidate, validate)
  );

  return seenGuids;
}
