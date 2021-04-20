import { ConfigurationObject, getParentByName } from "../../classes/codeConfig";
import { App } from "../..";
import { OptionHelper } from "../optionHelper";

// TODO:
// because this is so dynamic the "providedIds" in getParentIds isn't right for properties, bootstrap, source, destination, schedule, etc
// equivalent of validateConfigObjectKeys(Source, configObject); for this whole thing to freak out if not applicable. is this important?
// Error: only one property can be identifying

interface columnTypes {
  [colName: string]: string;
}

export async function expandSyncTable(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate: boolean = false
): Promise<ConfigurationObject[]> {
  const out: ConfigurationObject[] = [];

  const rootId = configObject.id;
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
      identifying: false,
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
      class: "Property",
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
        propertyId: identityPropertConfig.id,
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
    destinationConfig.mapping[destKey] = syncMap[destKey].id;
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
        appId: app.id,
        appOptions: options,
      });
    }

    result = await getColumns({
      connection,
      appOptions: options,
      appId: app.id,
      tableName,
    });
  } catch (err) {
    throw err;
  } finally {
    if (connection && pluginApp.methods.disconnect) {
      await pluginApp.methods.disconnect({
        connection,
        app,
        appId: app.id,
        appOptions: options,
      });
    }
  }

  return result;
}
