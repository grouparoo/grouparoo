import {
  Destination,
  SimpleDestinationOptions,
} from "../../models/Destination";
import { App } from "../../models/App";
import { Profile } from "../../models/Profile";
import { Run } from "../../models/Run";
import { Import } from "../../models/Import";
import { Export, ExportProfilePropertiesWithType } from "../../models/Export";
import { Group } from "../../models/Group";
import { Property } from "../../models/Property";
import { MappingHelper } from "../mappingHelper";
import {
  ExportedProfile,
  ExportProfilePluginMethod,
  ExportProfilesPluginMethod,
  ErrorWithProfileGuid,
  DestinationMappingOptionsResponseTypes,
  DestinationMappingOptionsMethodResponse,
} from "../../classes/plugin";
import { api, task, log, config, cache } from "actionhero";
import { deepStrictEqual } from "assert";
import { ProfilePropertyOps } from "./profileProperty";
import { destinationTypeConversions } from "../destinationTypeConversions";
import { GroupMember } from "../../models/GroupMember";
import { Op } from "sequelize";
import { PluginConnection } from "../../classes/plugin";

function deepStrictEqualBoolean(a: any, b: any): boolean {
  try {
    deepStrictEqual(a, b);
    return true;
  } catch (error) {
    return false;
  }
}

export namespace DestinationOps {
  /**
   * Export all the Group Members of the Groups that this Destination is Tracking
   */
  export async function exportGroupMembers(
    destination: Destination,
    force = false
  ) {
    const group = await destination.$get("group");
    if (group) await group.run(force, destination.guid);
  }

  /**
   * Track a Group
   */
  export async function trackGroup(destination: Destination, group: Group) {
    const oldGroupGuid = destination.groupGuid;
    await destination.update({ groupGuid: group.guid });

    if (oldGroupGuid !== group.guid) {
      if (oldGroupGuid) {
        const oldGroup = await Group.findByGuid(oldGroupGuid);
        await oldGroup.run(true, destination.guid);
      }
      await group.run(true, destination.guid);
    }
  }

  /**
   * Un-track a Group
   */
  export async function unTrackGroup(destination: Destination) {
    const oldGroupGuid = destination.groupGuid;
    await destination.update({ groupGuid: null });

    if (oldGroupGuid) {
      const oldGroup = await Group.findByGuid(oldGroupGuid);
      await oldGroup.run(true, destination.guid);
    }
  }

  /**
   * Get a preview of a Profile for this Destination
   * It is assumed that the profile provided is already in a Group tracked by this Destination
   */
  export async function profilePreview(
    destination: Destination,
    profile: Profile,
    mapping: MappingHelper.Mappings,
    destinationGroupMemberships: {
      [groupGuid: string]: string;
    }
  ) {
    const profileProperties = await profile.properties();
    const mappingKeys = Object.keys(mapping);
    const mappedProfileProperties = {};
    const destinationMappingOptions = await destination.destinationMappingOptions();
    mappingKeys.forEach((k) => {
      const collection = profileProperties[mapping[k]];
      mappedProfileProperties[k] = collection;

      let destinationType: DestinationMappingOptionsResponseTypes = "any";
      for (const j in destinationMappingOptions.properties.required) {
        const destinationProperty =
          destinationMappingOptions.properties.required[j];
        if (destinationProperty.key === k) {
          destinationType = destinationProperty.type;
        }
      }
      for (const j in destinationMappingOptions.properties.known) {
        const destinationProperty =
          destinationMappingOptions.properties.known[j];
        if (destinationProperty.key === k) {
          destinationType = destinationProperty.type;
        }
      }

      mappedProfileProperties[k].values = collection.values.map((value) =>
        formatOutgoingProfileProperties(value, collection.type, destinationType)
      );
      mappedProfileProperties[k].type = destinationType;
    });

    const groups = await profile.$get("groups");
    const mappedGroupNames = groups
      .filter((group) =>
        Object.keys(destinationGroupMemberships).includes(group.guid)
      )
      .map((group) => destinationGroupMemberships[group.guid])
      .sort();

    const apiData = await profile.apiData();

    return Object.assign(apiData, {
      properties: mappedProfileProperties,
      groupNames: mappedGroupNames,
    });
  }

  /**
   * Get the Destination Connection Options from the plugin
   */
  export async function destinationConnectionOptions(
    destination: Destination,
    destinationOptions: SimpleDestinationOptions = {}
  ) {
    const { pluginConnection } = await destination.getPlugin();
    const app = await destination.$get("app");
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();

    if (!pluginConnection.methods.destinationOptions) {
      throw new Error(
        `cannot return destination options for ${destination.type}`
      );
    }

    return pluginConnection.methods.destinationOptions({
      connection,
      app,
      appGuid: app.guid,
      appOptions,
      destinationOptions,
    });
  }

  /**
   * Get the Destination Mapping Options from the Plugin
   */
  export async function destinationMappingOptions(
    destination: Destination,
    cached = true
  ) {
    const cacheKey = `destination:${destination.guid}:mappingOptions`;
    const cacheDuration = 1000 * 60 * 10; // 10 minutes

    if (cached) {
      try {
        const {
          value,
        }: {
          value: DestinationMappingOptionsMethodResponse;
        } = await cache.load(cacheKey);
        return value;
      } catch (error) {
        if (
          error.message.toString() !== "Object not found" &&
          error.message.toString() !== "Object expired"
        ) {
          throw error;
        }
      }
    }

    const { pluginConnection } = await destination.getPlugin();
    const app = await destination.$get("app");
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();
    const destinationOptions = await destination.getOptions();

    if (!pluginConnection.methods.destinationMappingOptions) {
      throw new Error(
        `cannot return destination mapping options for ${destination.type}`
      );
    }

    const mappingOptions = await pluginConnection.methods.destinationMappingOptions(
      {
        connection,
        app,
        appGuid: app.guid,
        appOptions,
        destination,
        destinationGuid: destination.guid,
        destinationOptions,
      }
    );

    await cache.save(cacheKey, mappingOptions, cacheDuration);

    return mappingOptions;
  }

  export async function getExportArrayProperties(destination: Destination) {
    const { pluginConnection } = await destination.getPlugin();
    const app = await destination.$get("app");
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();
    const destinationOptions = await destination.getOptions();

    if (!pluginConnection.methods.exportArrayProperties) {
      throw new Error(
        `cannot determine export array properties for ${destination.type}`
      );
    }

    return pluginConnection.methods.exportArrayProperties({
      connection,
      app,
      appGuid: app.guid,
      appOptions,
      destination,
      destinationGuid: destination.guid,
      destinationOptions,
    });
  }

  /**
   * Given a Destination and a Profile (and lots of related data), create all the exports that should be sent
   */
  export async function exportProfile(
    destination: Destination,
    profile: Profile,
    synchronous = false,
    force = false
  ) {
    const app = await destination.$get("app");
    const appOptions = await app.getOptions();
    await app.validateOptions(appOptions);
    const rules = await Property.findAll();
    const destinationGroupMemberships = await destination.getDestinationGroupMemberships();
    const mapping = await destination.getMapping();

    let mappedOldProfileProperties: ExportProfilePropertiesWithType = {};
    let mappedNewProfileProperties: ExportProfilePropertiesWithType = {};
    let oldGroupNames: string[] = [];
    let newGroupNames: string[] = [];
    let toDelete = false;

    let newGroups = await Group.findAll({
      include: [{ model: GroupMember, where: { profileGuid: profile.guid } }],
    });

    if (!newGroups.map((g) => g.guid).includes(destination.groupGuid)) {
      toDelete = true;
    }

    let newProfileProperties = await profile.properties();

    // New and old properties and groups are in the context of this destination and what it has currently been sent
    // If there is not a mostRecentExport, both old groups and old profile properties are an empty collection
    const mostRecentExport = await Export.findOne({
      where: {
        destinationGuid: destination.guid,
        profileGuid: profile.guid,
        mostRecent: true,
        errorMessage: null,
      },
    });

    if (mostRecentExport && mostRecentExport.toDelete !== true) {
      mappedOldProfileProperties = JSON.parse(
        // @ts-ignore
        mostRecentExport.getDataValue("newProfileProperties")
      );
      oldGroupNames = mostRecentExport.newGroups;
    }

    for (const k in mapping) {
      const rule = rules.find((r) => r.key === mapping[k]);
      if (!rule) throw new Error(`cannot find rule for ${mapping[k]}`);
      const { type } = rule;
      mappedNewProfileProperties[k] = {
        type,
        rawValue: newProfileProperties[mapping[k]]
          ? await Promise.all(
              newProfileProperties[mapping[k]].values.map((v) =>
                ProfilePropertyOps.buildRawValue(v, type)
              )
            )
          : null,
      };
    }

    // Send only the properties from the array that should be sent to the Destination, otherwise send the first entry in the array of profile properties
    const exportArrayProperties = await getExportArrayProperties(destination);

    for (const k in mappedNewProfileProperties) {
      if (
        mappedNewProfileProperties[k] &&
        !exportArrayProperties.includes(k) &&
        !exportArrayProperties.includes("*")
      ) {
        mappedNewProfileProperties[k].rawValue
          ? (mappedNewProfileProperties[k].rawValue = Array.isArray(
              mappedNewProfileProperties[k].rawValue
            )
              ? mappedNewProfileProperties[k].rawValue[0]
              : mappedNewProfileProperties[k].rawValue)
          : delete mappedNewProfileProperties[k];
      }
    }

    newGroupNames = newGroups
      .filter((group) =>
        destinationGroupMemberships
          .map((dgm) => dgm.groupGuid)
          .includes(group.guid)
      )
      .map(
        (group) =>
          destinationGroupMemberships.filter(
            (dgm) => dgm.groupGuid === group.guid
          )[0].remoteKey
      );

    // determine if there are changes between this export and the previous one
    let hasChanges = true;
    if (
      !force &&
      mostRecentExport &&
      deepStrictEqualBoolean(
        mappedOldProfileProperties,
        mappedNewProfileProperties
      ) &&
      deepStrictEqualBoolean(oldGroupNames.sort(), newGroupNames.sort()) &&
      !toDelete &&
      (!mostRecentExport || !mostRecentExport.toDelete)
    ) {
      hasChanges = false;
    }

    const _export = await Export.create({
      destinationGuid: destination.guid,
      profileGuid: profile.guid,
      startedAt: synchronous ? new Date() : undefined,
      oldProfileProperties: mappedOldProfileProperties,
      newProfileProperties: mappedNewProfileProperties,
      oldGroups: oldGroupNames.sort(),
      newGroups: newGroupNames.sort(),
      hasChanges,
      toDelete,
      force,
    });

    const { pluginConnection } = await destination.getPlugin();

    if (synchronous) {
      return destination.sendExports([_export], synchronous);
    }
  }

  function transformError(
    error: Error,
    profileGuid: string
  ): ErrorWithProfileGuid {
    if (typeof error === "string") {
      error = new Error(error);
    }
    if (!error) {
      error = new Error(`unknown export error with profile ${profileGuid}`);
    }
    const myError: ErrorWithProfileGuid = <ErrorWithProfileGuid>error;
    myError.profileGuid = profileGuid;
    // also can have error.errorLevel on it already
    return myError;
  }

  async function getBatchFunction(
    destination: Destination
  ): Promise<ExportProfilesPluginMethod> {
    const { pluginConnection } = await destination.getPlugin();
    if (pluginConnection.methods.exportProfiles) {
      return pluginConnection.methods.exportProfiles;
    }

    const method = pluginConnection.methods.exportProfile;
    if (!method) {
      throw new Error(
        `destination ${destination.name} (${destination.guid}) has no exportProfile or exportProfiles method`
      );
    }

    // loop through each one
    const singleAsBatch: ExportProfilesPluginMethod = async function ({
      connection,
      app,
      appGuid,
      appOptions,
      destination,
      destinationGuid,
      destinationOptions,
      exports: _exports,
    }) {
      const outErrors: ErrorWithProfileGuid[] = [];
      let outRetryDelay: number = undefined;
      let outSuccess = true;

      for (const _export of _exports) {
        const { profileGuid } = _export;
        try {
          let { success, retryDelay, error } = await method({
            connection,
            app,
            appGuid,
            appOptions,
            destination,
            destinationGuid,
            destinationOptions,
            export: _export,
          });

          if (!success || error) {
            outSuccess = false;
            outErrors.push(transformError(error, profileGuid));
          }
          if (retryDelay) {
            if (!outRetryDelay || outRetryDelay < retryDelay) {
              outRetryDelay = retryDelay;
            }
          }
        } catch (err) {
          outSuccess = false;
          outErrors.push(transformError(err, profileGuid));
        }
      }

      return {
        errors: outErrors.length === 0 ? undefined : outErrors,
        retryDelay: outRetryDelay,
        success: outSuccess,
      };
    };
    return singleAsBatch;
  }

  async function buildExportedProfiles(
    destination: Destination,
    _exports: Export[]
  ): Promise<ExportedProfile[]> {
    const exportedProfiles: ExportedProfile[] = [];
    for (const _export of _exports) {
      const profile = await _export.$get("profile"); // PEFORMANCE: get all profiles at once
      exportedProfiles.push({
        profile,
        profileGuid: profile.guid,
        oldProfileProperties: await formatProfilePropertiesForDestination(
          _export,
          destination,
          "oldProfileProperties"
        ),
        newProfileProperties: await formatProfilePropertiesForDestination(
          _export,
          destination,
          "newProfileProperties"
        ),
        oldGroups: _export.oldGroups,
        newGroups: _export.newGroups,
        toDelete: _export.toDelete,
      });
    }
    return exportedProfiles;
  }

  export interface CombinedError extends Error {
    errors?: ErrorWithProfileGuid[];
  }

  export async function sendExports(
    destination: Destination,
    givenExports: Export[],
    synchronous = false
  ): Promise<{
    retryDelay: number;
    retryExportGuids: string[];
    success: boolean;
    error: Error;
  }> {
    const _exports: Export[] = []; // only ones we are sending
    for (const _export of givenExports) {
      // TODO: maybe should recalcuate hasChanges and from current mostRecent
      if (!_export.hasChanges) {
        // do not include exports with hasChanges=false
        await _export.completeAndMarkMostRecent();
        continue;
      }
      _exports.push(_export);
    }

    const exportProfiles: ExportProfilesPluginMethod = await getBatchFunction(
      destination
    );

    const options = await destination.getOptions();
    const app = await destination.$get("app");
    const appOptions = await app.getOptions();
    const connection = await app.getConnection();

    // check if parallelism ok
    const parallelismOk = await app.checkAndUpdateParallelism("incr");
    if (!parallelismOk) {
      const error = new Error(`parallelism limit reached for ${app.type}`);
      if (synchronous) {
        throw error;
      }
      return {
        success: false,
        error,
        retryDelay: config.tasks.timeout + 1,
        retryExportGuids: _exports.map((e) => e.guid),
      };
    }

    let combinedError: CombinedError = null;
    let outRetryDelay: number = undefined;
    let outSuccess = false;

    try {
      const exportedProfiles = await buildExportedProfiles(
        destination,
        _exports
      );

      let { success, retryDelay, errors } = await exportProfiles({
        connection,
        app,
        appGuid: app.guid,
        appOptions,
        destination,
        destinationGuid: destination.guid,
        destinationOptions: options,
        exports: exportedProfiles,
      });

      combinedError = new Error(
        `error exporting ${
          errors ? errors.length : "?"
        } profiles to destination ${destination.name} (${destination.guid}): ${
          errors ? errors.map((e) => e.message).join(", ") : ""
        }`
      );
      combinedError.errors = errors || [];
      outRetryDelay = retryDelay;
      outSuccess = success && combinedError.errors.length === 0;
    } catch (error) {
      combinedError = error;
    } finally {
      await app.checkAndUpdateParallelism("decr");
    }

    if (outSuccess) {
      // they were all correct!
      for (const _export of _exports) {
        await _export.completeAndMarkMostRecent();
      }
      return {
        success: true,
        error: undefined,
        retryExportGuids: undefined,
        retryDelay: undefined,
      };
    }

    // problem!
    if (!combinedError.errors || combinedError.errors.length === 0) {
      // unspecified error, so don't know specific profile with issue.
      const retryExportGuids: string[] = [];
      for (const _export of _exports) {
        await _export.setError(combinedError);
        retryExportGuids.push(_export.guid);
      }
      if (synchronous) {
        // caller wants to raise
        throw combinedError;
      }
      return {
        success: false,
        error: combinedError,
        retryExportGuids,
        retryDelay: outRetryDelay,
      };
    }

    // known specific profiles where there were errors
    const profilesWithErrors: { [guid: string]: ErrorWithProfileGuid } = {};
    for (const errorWithGuid of combinedError.errors) {
      const profileGuid = errorWithGuid.profileGuid;
      if (!profileGuid) {
        throw new Error(
          `Errors returned without profileGuid - throw if unknown (${destination.guid})`
        );
      }
      profilesWithErrors[profileGuid] = errorWithGuid;
    }

    const remainingProfilesWithErrors = Object.assign({}, profilesWithErrors);

    const retryExportGuids: string[] = [];
    for (const _export of _exports) {
      const { profileGuid } = _export;
      const errorWithGuid = profilesWithErrors[profileGuid];
      if (errorWithGuid) {
        await _export.setError(errorWithGuid);
        delete remainingProfilesWithErrors[profileGuid]; // used

        // "info" means that it's actually ok. for example, skipped.
        // we don't need to retry it.
        if (_export.errorLevel != "info") {
          retryExportGuids.push(_export.guid);
        }
      } else {
        // this one was a success!
        await _export.completeAndMarkMostRecent();
      }
    }

    const profilesNotUsed = Object.keys(remainingProfilesWithErrors);
    if (profilesNotUsed.length > 0) {
      throw new Error(
        `Invalid ErrorWithProfileGuid given but not used (${
          destination.guid
        }): ${profilesNotUsed.join(",")}`
      );
    }

    // because of the "info" errorLevel, it's actually possible that everything is ok again
    if (retryExportGuids.length === 0) {
      return {
        success: true,
        error: undefined,
        retryExportGuids: undefined,
        retryDelay: undefined,
      };
    }

    if (synchronous) {
      // caller wants to raise
      throw combinedError;
    }
    return {
      success: false,
      error: combinedError,
      retryExportGuids,
      retryDelay: outRetryDelay,
    };
  }

  export async function sendExport(
    destination: Destination,
    _export: Export,
    synchronous = false
  ) {
    return sendExports(destination, [_export], synchronous);
  }

  async function formatProfilePropertiesForDestination(
    _export: Export,
    destination: Destination,
    key: "oldProfileProperties" | "newProfileProperties"
  ) {
    const response: { [key: string]: any } = {};
    const rawProperties = JSON.parse(_export["dataValues"][key]);
    const destinationMappingOptions = await destination.destinationMappingOptions();
    for (const k in rawProperties) {
      const type: string = rawProperties[k].type;
      const value = _export[key][k];
      let destinationType: DestinationMappingOptionsResponseTypes = "any";

      for (const j in destinationMappingOptions.properties.required) {
        const destinationProperty =
          destinationMappingOptions.properties.required[j];
        if (destinationProperty.key === k) {
          destinationType = destinationProperty.type;
        }
      }
      for (const j in destinationMappingOptions.properties.known) {
        const destinationProperty =
          destinationMappingOptions.properties.known[j];
        if (destinationProperty.key === k) {
          destinationType = destinationProperty.type;
        }
      }

      if (Array.isArray(value)) {
        response[k] = value.map((v) =>
          formatOutgoingProfileProperties(v, type, destinationType)
        );
      } else {
        response[k] = formatOutgoingProfileProperties(
          value,
          type,
          destinationType
        );
      }
    }

    return response;
  }

  /**
   * Format Grouparoo's profile properties to the type the destination wants.
   */
  export function formatOutgoingProfileProperties(
    value: any,
    grouparooType: string,
    destinationType: DestinationMappingOptionsResponseTypes
  ) {
    if (!grouparooType) return null;
    if (value === null || value === undefined) return value;

    const conversionBatch = destinationTypeConversions[grouparooType];
    const converter: Function = conversionBatch
      ? conversionBatch[destinationType]
      : null;

    if (converter) {
      return converter(value);
    } else {
      throw new Error(
        `cannot export grouparoo type ${grouparooType} to destination type ${destinationType}`
      );
    }
  }
}
