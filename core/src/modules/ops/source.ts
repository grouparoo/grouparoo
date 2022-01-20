import Sequelize from "sequelize";
import {
  Source,
  SimpleSourceOptions,
  SourceMapping,
  BootstrapUniquePropertyParams,
} from "../../models/Source";
import { RecordProperty } from "../../models/RecordProperty";
import {
  Property,
  PropertyFiltersWithKey,
  SimplePropertyOptions,
} from "../../models/Property";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { App } from "../../models/App";
import { GrouparooModel } from "../../models/GrouparooModel";
import { Option } from "../../models/Option";
import { OptionHelper } from "../optionHelper";
import { MappingHelper } from "../mappingHelper";
import { log, utils, api } from "actionhero";
import { LoggedModel } from "../../classes/loggedModel";
import { FilterHelper } from "../filterHelper";
import { topologicalSort } from "../topologicalSort";
import { ConfigWriter } from "../configWriter";
import {
  RecordPropertiesPluginMethodResponse,
  RecordPropertyPluginMethodResponse,
} from "../../classes/plugin";
import { TableSpeculation } from "../tableSpeculation";
import { RecordPropertyType } from "./record";

export namespace SourceOps {
  /**
   * Get the connection options for this source from the plugin
   */
  export async function sourceConnectionOptions(
    source: Source,
    sourceOptions: SimpleSourceOptions = {}
  ) {
    const { pluginConnection } = await source.getPlugin();
    const app = await source.$get("app", { scope: null, include: [Option] });
    const connection = await app.getConnection();
    const appOptions = await app.getOptions(true);

    if (!pluginConnection.methods.sourceOptions) return {};

    return pluginConnection.methods.sourceOptions({
      connection,
      app,
      appId: app.id,
      appOptions,
      sourceOptions,
    });
  }

  /**
   * Load a preview of the data from this Source
   */
  export async function sourcePreview(
    source: Source,
    sourceOptions?: SimpleSourceOptions
  ) {
    if (!sourceOptions) sourceOptions = await source.getOptions(true);

    try {
      // if the options aren't set yet, return an empty array of rows
      await source.validateOptions(sourceOptions);
    } catch {
      return [];
    }

    const { pluginConnection } = await source.getPlugin();
    const app = await source.$get("app", { scope: null, include: [Option] });
    const connection = await app.getConnection();
    const appOptions = await app.getOptions(true);

    if (!pluginConnection.methods.sourcePreview) {
      throw new Error(`cannot return a source preview for ${source.type}`);
    }
    return pluginConnection.methods.sourcePreview({
      connection,
      app,
      appId: app.id,
      appOptions,
      source,
      sourceId: source.id,
      sourceOptions,
    });
  }

  /**
   * Import a record property for a GrouparooRecord from this source
   */
  export async function importRecordProperty(
    source: Source,
    record: GrouparooRecord,
    property: Property,
    propertyOptionsOverride?: OptionHelper.SimpleOptions,
    propertyFiltersOverride?: PropertyFiltersWithKey[],
    preloadedArgs: {
      app?: App;
      connection?: any;
      appOptions?: OptionHelper.SimpleOptions;
      sourceOptions?: OptionHelper.SimpleOptions;
      sourceMapping?: MappingHelper.Mappings;
      recordProperties?: RecordPropertyType;
    } = {}
  ) {
    if (property.state !== "ready" && !propertyOptionsOverride) return;

    if (propertyOptionsOverride) {
      await property.validateOptions(propertyOptionsOverride, false);
    }

    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection) {
      throw new Error(
        `cannot find connection for source ${source.type} (${source.id})`
      );
    }

    const method = pluginConnection.methods.recordProperty;
    if (!method) return;

    const app =
      preloadedArgs.app ||
      (await source.$get("app", { scope: null, include: [Option] }));
    const connection = preloadedArgs.connection || (await app.getConnection());
    const appOptions = preloadedArgs.appOptions || (await app.getOptions());
    const sourceOptions =
      preloadedArgs.sourceOptions || (await source.getOptions());
    const sourceMapping =
      preloadedArgs.sourceMapping || (await source.getMapping());

    // we may not have the record property needed to make the mapping (ie: userId is not set on this anonymous record)
    if (Object.values(sourceMapping).length > 0) {
      const propertyMappingKey = Object.values(sourceMapping)[0];
      const recordProperties =
        preloadedArgs.recordProperties || (await record.getProperties());
      if (!recordProperties[propertyMappingKey]) {
        return;
      }
    }

    while ((await app.checkAndUpdateParallelism("incr")) === false) {
      log(`parallelism limit reached for ${app.type}, sleeping...`);
      utils.sleep(100);
    }

    try {
      const response = await method({
        connection,
        app,
        appId: app.id,
        appOptions,
        source,
        sourceId: source.id,
        sourceOptions,
        sourceMapping,
        property,
        propertyId: property.id,
        propertyOptions: propertyOptionsOverride
          ? propertyOptionsOverride
          : await property.getOptions(),
        propertyFilters: propertyFiltersOverride
          ? propertyFiltersOverride
          : await property.getFilters(),
        record,
        recordId: record.id,
      });

      return response;
    } catch (error) {
      throw error;
    } finally {
      await app.checkAndUpdateParallelism("decr");
    }
  }

  /**
   * Import a record property for a GrouparooRecord from this source
   */
  export async function importRecordProperties(
    source: Source,
    records: GrouparooRecord[],
    properties: Property[],
    propertyOptionsOverride?: { [key: string]: SimplePropertyOptions },
    propertyFiltersOverride?: { [key: string]: PropertyFiltersWithKey[] },
    preloadedArgs: {
      app?: App;
      connection?: any;
      appOptions?: OptionHelper.SimpleOptions;
      sourceOptions?: OptionHelper.SimpleOptions;
      sourceMapping?: MappingHelper.Mappings;
      recordProperties?: {};
    } = {}
  ) {
    if (
      properties.find((p) => p.state !== "ready") &&
      !propertyOptionsOverride
    ) {
      return;
    }

    for (const key in propertyOptionsOverride) {
      const property = properties.find((p) => (p.id = key));
      await property.validateOptions(propertyOptionsOverride[key], false);
    }

    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection) {
      throw new Error(
        `cannot find connection for source ${source.type} (${source.id})`
      );
    }

    const method = pluginConnection.methods.recordProperties;
    if (!method) return;

    const app =
      preloadedArgs.app || (await source.$get("app", { include: [Option] }));
    const connection = preloadedArgs.connection || (await app.getConnection());
    const appOptions = preloadedArgs.appOptions || (await app.getOptions());
    const sourceOptions =
      preloadedArgs.sourceOptions || (await source.getOptions());
    const sourceMapping =
      preloadedArgs.sourceMapping || (await source.getMapping());

    while ((await app.checkAndUpdateParallelism("incr")) === false) {
      log(`parallelism limit reached for ${app.type}, sleeping...`);
      utils.sleep(100);
    }

    const propertyOptions: { [key: string]: SimplePropertyOptions } = {};
    const propertyFilters: { [key: string]: FilterHelper.FiltersWithKey[] } =
      {};
    for (const property of properties) {
      if (propertyOptionsOverride && propertyOptionsOverride[property.id]) {
        propertyOptions[property.id] = propertyOptionsOverride[property.id];
      } else {
        propertyOptions[property.id] = await property.getOptions();
      }

      if (propertyFiltersOverride && propertyFiltersOverride[property.id]) {
        propertyFilters[property.id] = propertyFiltersOverride[property.id];
      } else {
        propertyFilters[property.id] = await property.getFilters();
      }
    }

    try {
      const response = await method({
        connection,
        app,
        appId: app.id,
        appOptions,
        source,
        sourceId: source.id,
        sourceOptions,
        sourceMapping,
        properties,
        propertyIds: properties.map((p) => p.id),
        propertyOptions,
        propertyFilters,
        records,
        recordIds: records.map((p) => p.id),
      });

      await applyNonUniqueMappedResultsToAllRecords(response, {
        records,
        properties,
        sourceMapping,
      });

      return response;
    } catch (error) {
      throw error;
    } finally {
      await app.checkAndUpdateParallelism("decr");
    }
  }

  // for non-unique mappings, we need to fan out the values we received back from the source
  export async function applyNonUniqueMappedResultsToAllRecords(
    response: RecordPropertiesPluginMethodResponse,
    {
      records,
      properties,
      sourceMapping,
    }: {
      records: GrouparooRecord[];
      properties: Property[];
      sourceMapping: SourceMapping;
    }
  ) {
    const mappedPropertyKey = Object.values(sourceMapping)[0];
    const mappedProperty = await Property.findOne({
      where: { key: mappedPropertyKey },
    });

    if (!mappedProperty) return;
    if (mappedProperty.unique) return;

    const valueMap: { [mappedPropertyId: string]: { [match: string]: any } } =
      {};

    // load up the values
    for (const recordId of Object.keys(response)) {
      const record = records.find((p) => p.id === recordId);
      const recordProperties = await record.getProperties();
      for (const property of properties) {
        if (!valueMap[property.id]) valueMap[property.id] = {};
        if (recordProperties[mappedProperty.key].state !== "ready") {
          throw new Error(
            `RecordProperty ${mappedProperty.key} for record ${record.id} is not ready`
          );
        }

        if (
          recordProperties[mappedProperty.key].values.length > 0 &&
          recordProperties[mappedProperty.key].values[0] !== null &&
          recordProperties[mappedProperty.key].values[0] !== undefined
        ) {
          valueMap[property.id][
            recordProperties[mappedProperty.key].values[0].toString()
          ] = response[record.id][property.id];
        }
      }
    }

    // apply the values
    for (const record of records) {
      if (!response[record.id]) {
        response[record.id] = {};
        const recordProperties = await record.getProperties();
        for (const propertyKey of Object.keys(valueMap)) {
          const lookupValue =
            recordProperties[mappedProperty.key]?.values[0]?.toString();
          if (lookupValue) {
            response[record.id][propertyKey] =
              valueMap[propertyKey][lookupValue];
          }
        }
      }
    }
  }

  /**
   * Import all record properties from a Source for a GrouparooRecord
   */
  export async function _import(source: Source, record: GrouparooRecord) {
    const hash: Record<string, RecordPropertyPluginMethodResponse> = {};
    const properties = await source.$get("properties", {
      where: { state: "ready" },
    });

    const recordProperties = await record.getProperties();
    const app = await source.$get("app", { scope: null, include: [Option] });
    const appOptions = await app.getOptions();
    const connection = await app.getConnection();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();

    const preloadedArgs = {
      app,
      connection,
      appOptions,
      sourceOptions,
      sourceMapping,
      recordProperties,
    };

    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection) {
      throw new Error(
        `cannot find connection for source ${source.type} (${source.id})`
      );
    }

    const canImport = pluginConnection.methods.recordProperty;
    if (!canImport) {
      return {
        canImport: false,
        properties: {},
      };
    }

    for (const property of properties) {
      hash[property.id] = await source.importRecordProperty(
        record,
        property,
        null,
        null,
        preloadedArgs
      );
    }

    // remove null and undefined as we cannot set that value
    const hashKeys = Object.keys(hash);
    for (const i in hashKeys) {
      const id = hashKeys[i];
      if (hash[id] === null || hash[id] === undefined) {
        delete hash[id];
      }
    }

    return {
      canImport: true,
      properties: hash,
    };
  }

  /**
   * Sorts an array of Sources by their dependencies.
   * Be sure to eager-load Mappings and Properties
   */
  export function sortByDependencies(sources: Source[]) {
    const sortedSources: Source[] = [];

    const graph: { [id: string]: string[] } = {};
    for (const source of sources) {
      const provides = source.properties.map((p) => p.id);
      const dependsOn = source.mappings.map((p) => p.propertyId);
      for (const p of provides) {
        graph[p] = dependsOn.filter((id) => id !== p);
      }
    }

    const sortedPropertyIds = topologicalSort(graph);
    for (const propertyId of sortedPropertyIds) {
      const source = sources.find((s) =>
        s.properties.map((p) => p.id).includes(propertyId)
      );
      if (!sortedSources.map((s) => s.id).includes(source.id)) {
        sortedSources.push(source);
      }
    }

    return sortedSources;
  }

  /**
   * Get the default values of the options of a Property from this source
   */
  export async function defaultPropertyOptions(source: Source) {
    const { pluginConnection } = await source.getPlugin();

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${source.type}`);
    }

    if (!pluginConnection.methods.propertyOptions) {
      throw new Error(`cannot find propertyOptions for type ${source.type}`);
    }

    const response: {
      key: string;
      displayName?: string;
      default?: boolean;
      description: string;
      required: boolean;
      type: string;
      primary?: boolean;
      options: {
        key: string;
        description?: string;
        default?: boolean;
        examples?: any[];
      }[];
    }[] = [];
    const app = await source.$get("app", { include: [Option], scope: null });
    const appOptions = await app.getOptions(true);
    const connection = await app.getConnection();
    const sourceOptions = await source.getOptions(true);
    const sourceMapping = await source.getMapping();

    const propertyOptionOptions =
      await pluginConnection.methods.propertyOptions({
        property: null,
        propertyId: null,
        propertyOptions: {},
      });

    for (const i in propertyOptionOptions) {
      const opt = propertyOptionOptions[i];
      const options = await opt.options({
        connection,
        app,
        appId: app.id,
        appOptions,
        source,
        sourceId: source.id,
        sourceOptions,
        sourceMapping,
        property: null,
        propertyId: null,
      });

      response.push({
        key: opt.key,
        displayName: opt.displayName,
        description: opt.description,
        required: opt.required,
        type: opt.type,
        primary: opt.primary,
        options,
      });
    }

    return response;
  }

  /**
   * This method is used to bootstrap a new source which requires a Property for a mapping, when the rule doesn't yet exist.
   */
  export async function bootstrapUniqueProperty(
    source: Source,
    params: BootstrapUniquePropertyParams
  ) {
    const {
      mappedColumn,
      id,
      local = false,
      propertyOptions,
      sourceOptions,
    } = params;

    let { key, type } = params;

    const model =
      !key || !type ? await GrouparooModel.findById(source.modelId) : undefined;

    let didGenerateKey = false;
    const generateKey = (index?: number) =>
      `${ConfigWriter.generateId(model.name)}_${ConfigWriter.generateId(
        mappedColumn
      )}${!index ? "" : "_" + index}`;

    if (!key) {
      key = generateKey();
      didGenerateKey = true;
    }

    if (!type) {
      const preview = await source.sourcePreview(sourceOptions);
      const samples = preview.map((row) => row[mappedColumn]);
      type = TableSpeculation.columnType(mappedColumn, samples);
    }

    let retry: boolean;
    let keyCount = 0;

    do {
      retry = false;

      const property = Property.build({
        id,
        key,
        type,
        state: "ready",
        unique: true,
        sourceId: source.id,
        isArray: false,
      });

      try {
        // manually run the hooks we want
        Property.generateId(property);
        await Property.ensureUniqueKey(property);
        await Property.ensureNonArrayAndUnique(property);

        // danger zone!
        await LoggedModel.logCreate(property);
        await property.save({ hooks: false });

        // build the default options
        const { pluginConnection } = await source.getPlugin();
        if (!local) {
          let ruleOptions: SimplePropertyOptions = {};

          if (
            typeof pluginConnection.methods.uniquePropertyBootstrapOptions ===
            "function"
          ) {
            const app = await source.$get("app", { include: [Option] });
            const connection = await app.getConnection();
            const appOptions = await app.getOptions(true);
            const options = await source.getOptions(true);
            const defaultOptions =
              await pluginConnection.methods.uniquePropertyBootstrapOptions({
                app,
                appId: app.id,
                connection,
                appOptions,
                source,
                sourceId: source.id,
                sourceOptions: options,
                mappedColumn,
              });

            ruleOptions = defaultOptions;
          }

          if (propertyOptions) {
            Object.assign(ruleOptions, propertyOptions);
          }

          await property.setOptions(ruleOptions, false);
        }

        return property;
      } catch (error) {
        if (property) {
          await property.destroy();
          if (
            didGenerateKey &&
            keyCount <= 10 &&
            error?.message?.match(/key ".+" is already in use/)
          ) {
            keyCount++;
            key = generateKey(keyCount);
            retry = true;
          } else {
            throw error;
          }
        } else {
          throw error;
        }
      }
    } while (retry);
  }

  export async function pendingImportsBySource() {
    const countsBySource = await Property.findAll({
      attributes: [
        "sourceId",
        [
          Sequelize.fn(
            "COUNT",
            Sequelize.fn("DISTINCT", Sequelize.col("recordId"))
          ),
          "count",
        ],
      ],
      group: ["sourceId"],
      include: [
        {
          model: RecordProperty,
          attributes: [],
          where: { state: "pending" },
        },
      ],
      raw: true,
    });

    const counts: { [sourceId: string]: number } = {};
    countsBySource.forEach((record) => {
      //@ts-ignore
      counts[record.sourceId] = record["count"];
    });

    return { counts };
  }
}
