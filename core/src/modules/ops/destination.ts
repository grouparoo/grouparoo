import {
  Destination,
  SimpleDestinationOptions,
} from "../../models/Destination";
import { Profile } from "../../models/Profile";
import { Export, ExportProfilePropertiesWithType } from "../../models/Export";
import { Group } from "../../models/Group";
import { Property } from "../../models/Property";
import { MappingHelper } from "../mappingHelper";
import {
  ExportedProfile,
  ExportProfilesPluginMethod,
  ErrorWithProfileId,
  DestinationMappingOptionsResponseTypes,
  DestinationMappingOptionsMethodResponse,
} from "../../classes/plugin";
import { config, cache } from "actionhero";
import { deepStrictEqual } from "assert";
import { ProfilePropertyOps } from "./profileProperty";
import { destinationTypeConversions } from "../destinationTypeConversions";
import { GroupMember } from "../../models/GroupMember";

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
    if (group) await group.run(force, destination.id);
  }

  /**
   * Track a Group
   */
  export async function trackGroup(destination: Destination, group: Group) {
    const oldGroupId = destination.groupId;
    await destination.update({ groupId: group.id });

    if (oldGroupId !== group.id) {
      if (oldGroupId) {
        const oldGroup = await Group.findById(oldGroupId);
        await oldGroup.run(true, destination.id);
      }
      return group.run(true, destination.id);
    }
  }

  /**
   * Un-track a Group
   */
  export async function unTrackGroup(destination: Destination) {
    const oldGroupId = destination.groupId;
    await destination.update({ groupId: null });

    if (oldGroupId) {
      const oldGroup = await Group.findById(oldGroupId);
      return oldGroup.run(true, destination.id);
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
      [groupId: string]: string;
    }
  ) {
    const profileProperties = await profile.properties();
    const mappingKeys = Object.keys(mapping);
    const mappedProfileProperties = {};
    const destinationMappingOptions = await destination.destinationMappingOptions();
    for (const k of mappingKeys) {
      const collection = profileProperties[mapping[k]];
      if (!collection) continue; // we may have an optional property that hasn't yet been set

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
    }

    const groups = await profile.$get("groups");
    const mappedGroupNames = groups
      .filter((group) =>
        Object.keys(destinationGroupMemberships).includes(group.id)
      )
      .map((group) => destinationGroupMemberships[group.id])
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
    const appOptions = await app.getOptions(true);

    if (!pluginConnection.methods.destinationOptions) {
      throw new Error(
        `cannot return destination options for ${destination.type}`
      );
    }

    return pluginConnection.methods.destinationOptions({
      connection,
      app,
      appId: app.id,
      appOptions,
      destinationOptions,
    });
  }

  /**
   * Get the Destination Mapping Options from the Plugin
   */
  export async function destinationMappingOptions(
    destination: Destination,
    cached = true,
    saveCache = true
  ) {
    const cacheKey = `destination:${destination.id}:mappingOptions`;
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
    const appOptions = await app.getOptions(true);
    const destinationOptions = await destination.getOptions(true);

    if (!pluginConnection.methods.destinationMappingOptions) {
      throw new Error(
        `cannot return destination mapping options for ${destination.type}`
      );
    }

    const mappingOptions = await pluginConnection.methods.destinationMappingOptions(
      {
        connection,
        app,
        appId: app.id,
        appOptions,
        destination,
        destinationId: destination.id,
        destinationOptions,
      }
    );

    if (saveCache) await cache.save(cacheKey, mappingOptions, cacheDuration);

    return mappingOptions;
  }

  export async function getExportArrayProperties(destination: Destination) {
    const { pluginConnection } = await destination.getPlugin();
    const app = await destination.$get("app");
    const connection = await app.getConnection();
    const appOptions = await app.getOptions(true);
    const destinationOptions = await destination.getOptions(true);

    if (!pluginConnection.methods.exportArrayProperties) {
      throw new Error(
        `cannot determine export array properties for ${destination.type}`
      );
    }

    return pluginConnection.methods.exportArrayProperties({
      connection,
      app,
      appId: app.id,
      appOptions,
      destination,
      destinationId: destination.id,
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
    force = false,
    saveExports = true
  ) {
    const app = await destination.$get("app");
    const appOptions = await app.getOptions();
    await app.validateOptions(appOptions);
    const properties = await Property.findAll();
    const destinationGroupMemberships = await destination.getDestinationGroupMemberships();
    const mapping = await destination.getMapping();

    let mappedOldProfileProperties: ExportProfilePropertiesWithType = {};
    let mappedNewProfileProperties: ExportProfilePropertiesWithType = {};
    let oldGroupNames: string[] = [];
    let newGroupNames: string[] = [];
    let toDelete = false;

    let newGroups = await Group.findAll({
      include: [{ model: GroupMember, where: { profileId: profile.id } }],
    });

    if (!newGroups.map((g) => g.id).includes(destination.groupId)) {
      toDelete = true;
    }

    let newProfileProperties = await profile.properties();

    // New and old properties and groups are in the context of this destination and what it has currently been sent
    // If there is not a mostRecentExport, both old groups and old profile properties are an empty collection
    const mostRecentExport = await Export.findOne({
      where: {
        destinationId: destination.id,
        profileId: profile.id,
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
      const property = properties.find((r) => r.key === mapping[k]);
      if (!property) throw new Error(`cannot find rule for ${mapping[k]}`);
      const { type } = property;
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
        destinationGroupMemberships.map((dgm) => dgm.groupId).includes(group.id)
      )
      .map(
        (group) =>
          destinationGroupMemberships.filter(
            (dgm) => dgm.groupId === group.id
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

    let _export: Export;
    const exportArgs = {
      destinationId: destination.id,
      profileId: profile.id,
      startedAt: synchronous ? new Date() : undefined,
      oldProfileProperties: mappedOldProfileProperties,
      newProfileProperties: mappedNewProfileProperties,
      oldGroups: oldGroupNames.sort(),
      newGroups: newGroupNames.sort(),
      hasChanges,
      toDelete,
      force,
    };

    if (saveExports) {
      _export = await Export.create(exportArgs);
    } else {
      _export = Export.build(exportArgs);
    }

    if (synchronous && saveExports) {
      await destination.sendExports([_export], synchronous);
    }

    return _export;
  }

  function transformError(error: Error, profileId: string): ErrorWithProfileId {
    if (typeof error === "string") {
      error = new Error(error);
    }
    if (!error) {
      error = new Error(`unknown export error with profile ${profileId}`);
    }
    const myError: ErrorWithProfileId = <ErrorWithProfileId>error;
    myError.profileId = profileId;
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
        `destination ${destination.name} (${destination.id}) has no exportProfile or exportProfiles method`
      );
    }

    // loop through each one
    const singleAsBatch: ExportProfilesPluginMethod = async function ({
      connection,
      app,
      appId,
      appOptions,
      destination,
      destinationId,
      destinationOptions,
      exports: _exports,
    }) {
      const outErrors: ErrorWithProfileId[] = [];
      let outRetryDelay: number = undefined;
      let outSuccess = true;

      for (const _export of _exports) {
        const { profileId } = _export;
        try {
          let { success, retryDelay, error } = await method({
            connection,
            app,
            appId,
            appOptions,
            destination,
            destinationId,
            destinationOptions,
            export: _export,
          });

          if (!success || error) {
            outSuccess = false;
            outErrors.push(transformError(error, profileId));
          }
          if (retryDelay) {
            if (!outRetryDelay || outRetryDelay < retryDelay) {
              outRetryDelay = retryDelay;
            }
          }
        } catch (err) {
          outSuccess = false;
          outErrors.push(transformError(err, profileId));
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
        profileId: profile?.id,
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
    errors?: ErrorWithProfileId[];
  }

  export async function sendExports(
    destination: Destination,
    givenExports: Export[],
    synchronous = false
  ): Promise<{
    retryDelay: number;
    retryexportIds: string[];
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
        retryexportIds: _exports.map((e) => e.id),
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
        appId: app.id,
        appOptions,
        destination,
        destinationId: destination.id,
        destinationOptions: options,
        exports: exportedProfiles,
      });

      combinedError = new Error(
        `error exporting ${
          errors ? errors.length : "?"
        } profiles to destination ${destination.name} (${destination.id}): ${
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
        retryexportIds: undefined,
        retryDelay: undefined,
      };
    }

    // problem!
    if (!combinedError.errors || combinedError.errors.length === 0) {
      // unspecified error, so don't know specific profile with issue.
      const retryexportIds: string[] = [];
      for (const _export of _exports) {
        await _export.setError(combinedError);
        retryexportIds.push(_export.id);
      }
      if (synchronous) {
        // caller wants to raise
        throw combinedError;
      }
      return {
        success: false,
        error: combinedError,
        retryexportIds,
        retryDelay: outRetryDelay,
      };
    }

    // known specific profiles where there were errors
    const profilesWithErrors: { [id: string]: ErrorWithProfileId } = {};
    for (const errorWithId of combinedError.errors) {
      const profileId = errorWithId.profileId;
      if (!profileId) {
        throw new Error(
          `Errors returned without profileId - throw if unknown (${destination.id})`
        );
      }
      profilesWithErrors[profileId] = errorWithId;
    }

    const remainingProfilesWithErrors = Object.assign({}, profilesWithErrors);

    const retryexportIds: string[] = [];
    for (const _export of _exports) {
      const { profileId } = _export;
      const errorWithId = profilesWithErrors[profileId];
      if (errorWithId) {
        await _export.setError(errorWithId);
        delete remainingProfilesWithErrors[profileId]; // used

        // "info" means that it's actually ok. for example, skipped.
        // we don't need to retry it.
        if (_export.errorLevel != "info") {
          retryexportIds.push(_export.id);
        }
      } else {
        // this one was a success!
        await _export.completeAndMarkMostRecent();
      }
    }

    const profilesNotUsed = Object.keys(remainingProfilesWithErrors);
    if (profilesNotUsed.length > 0) {
      throw new Error(
        `Invalid ErrorWithProfileId given but not used (${
          destination.id
        }): ${profilesNotUsed.join(",")}`
      );
    }

    // because of the "info" errorLevel, it's actually possible that everything is ok again
    if (retryexportIds.length === 0) {
      return {
        success: true,
        error: undefined,
        retryexportIds: undefined,
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
      retryexportIds,
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
