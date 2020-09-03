import {
  Destination,
  SimpleDestinationOptions,
} from "../../models/Destination";
import { App } from "../../models/App";
import { Profile } from "../../models/Profile";
import { Run } from "../../models/Run";
import { Import } from "../../models/Import";
import { Export, ExportProfilePropertiesWithType } from "../../models/Export";
import { ExportRun } from "../../models/ExportRun";
import { Group } from "../../models/Group";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { MappingHelper } from "../mappingHelper";
import {
  ExportedProfile,
  ExportProfilePluginMethod,
  ExportProfilesPluginMethod,
  ErrorWithProfileGuid,
  DestinationMappingOptionsResponseTypes,
  DestinationMappingOptionsMethodResponse,
} from "../../classes/plugin";
import { task, log, config, cache } from "actionhero";
import { deepStrictEqual } from "assert";
import { ProfilePropertyOps } from "./profileProperty";
import { destinationTypeConversions } from "../destinationTypeConversions";

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
    await group.run(force, destination.guid);
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
    profile: Profile,
    mapping: MappingHelper.Mappings,
    destinationGroupMemberships: {
      [groupGuid: string]: string;
    }
  ) {
    const profileProperties = await profile.properties();
    const mappingKeys = Object.keys(mapping);
    const mappedProfileProperties = {};
    mappingKeys.forEach((k) => {
      mappedProfileProperties[k] = profileProperties[mapping[k]];
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
        appOptions,
        destination,
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
      appOptions,
      destination,
      destinationOptions,
    });
  }

  /**
   * Given a Destination and a Profile (and lots of related data), create all the exports that should be sent
   */
  export async function exportProfile(
    destination: Destination,
    profile: Profile,
    runs: Run[],
    imports: Array<Import>,
    oldProfileProperties: { [key: string]: any[] },
    newProfileProperties: { [key: string]: any[] },
    oldGroups: Array<Group>,
    newGroups: Array<Group>,
    synchronous = false,
    force = false
  ) {
    const app = await destination.$get("app");

    const appOptions = await app.getOptions();
    await app.validateOptions(appOptions);
    const cachedProfileProperties = await ProfilePropertyRule.cached();
    const destinationGroupMemberships = await destination.getDestinationGroupMemberships();

    const mapping = await destination.getMapping();

    let mappedOldProfileProperties: ExportProfilePropertiesWithType = {};
    let mappedNewProfileProperties: ExportProfilePropertiesWithType = {};

    for (const k in mapping) {
      const rule = cachedProfileProperties[mapping[k]];
      if (!rule) throw new Error(`cannot find rule for ${mapping[k]}`);
      const type = rule.type;

      mappedOldProfileProperties[k] = {
        type,
        rawValue: Array.isArray(oldProfileProperties[mapping[k]])
          ? await Promise.all(
              oldProfileProperties[mapping[k]].map((v) =>
                ProfilePropertyOps.buildRawValue(v, type)
              )
            )
          : await ProfilePropertyOps.buildRawValue(
              oldProfileProperties[mapping[k]],
              type
            ),
      };

      mappedNewProfileProperties[k] = {
        type,
        rawValue: Array.isArray(newProfileProperties[mapping[k]])
          ? await Promise.all(
              newProfileProperties[mapping[k]].map((v) =>
                ProfilePropertyOps.buildRawValue(v, type)
              )
            )
          : await ProfilePropertyOps.buildRawValue(
              newProfileProperties[mapping[k]],
              type
            ),
      };
    }

    const oldGroupNames = oldGroups
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
    const newGroupNames = newGroups
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

    const newGroupGuids = newGroups.map((g) => g.guid);
    let toDelete = true;
    if (newGroupGuids.includes(destination.groupGuid)) toDelete = false;

    const mostRecentExport = await Export.findOne({
      where: {
        destinationGuid: destination.guid,
        profileGuid: profile.guid,
        mostRecent: true,
        errorMessage: null,
      },
    });

    if (mostRecentExport) {
      const mostRecentMappedProfilePropertyKeys = Object.keys(
        mostRecentExport.newProfileProperties
      );
      const currentMappedNewProfilePropertyKeys = Object.keys(
        mappedNewProfileProperties
      );
      const currentMappedOldProfilePropertyKeys = Object.keys(
        mappedNewProfileProperties
      );

      // since this export was previously mapped, we can assume the previous mapping still makes sense...
      mostRecentMappedProfilePropertyKeys
        .filter((k) => !currentMappedNewProfilePropertyKeys.includes(k))
        .filter((k) => !currentMappedOldProfilePropertyKeys.includes(k))
        .forEach(
          (k) =>
            (mappedOldProfileProperties[k] = {
              type: "string",
              rawValue: ["unknown"],
            })
        );

      // we also want to check for groups we previously sent but are no longer sending
      // the profile may have not changed membership in the group, but the destination may have just started tracking it
      mostRecentExport.newGroups
        .filter((groupName) => !oldGroupNames.includes(groupName))
        .forEach((groupName) => oldGroupNames.push(groupName));

      newGroupNames
        .filter((groupName) => !mostRecentExport.newGroups.includes(groupName))
        .forEach((groupName) => {
          oldGroupNames.splice(oldGroupNames.indexOf(groupName), 1);
        });
    }

    // Send only the properties from the array that should be sent to the Destination, otherwise send the first entry in the array of profile properties
    const exportArrayProperties = await getExportArrayProperties(destination);

    for (const k in mappedOldProfileProperties) {
      if (
        mappedOldProfileProperties[k] &&
        !exportArrayProperties.includes(k) &&
        !exportArrayProperties.includes("*")
      ) {
        mappedOldProfileProperties[k].rawValue
          ? (mappedOldProfileProperties[k].rawValue =
              mappedOldProfileProperties[k].rawValue[0])
          : delete mappedOldProfileProperties[k];
      }
    }
    for (const k in mappedNewProfileProperties) {
      if (
        mappedNewProfileProperties[k] &&
        !exportArrayProperties.includes(k) &&
        !exportArrayProperties.includes("*")
      ) {
        mappedNewProfileProperties[k].rawValue
          ? (mappedNewProfileProperties[k].rawValue =
              mappedNewProfileProperties[k].rawValue[0])
          : delete mappedNewProfileProperties[k];
      }
    }

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
    });

    if (runs) {
      await Promise.all(
        runs.map((run) =>
          ExportRun.create({ exportGuid: _export.guid, runGuid: run.guid })
        )
      );
      await Promise.all(runs.map((run) => run.increment("exportsCreated")));
    }

    await _export.associateImports(imports);

    const { pluginConnection } = await destination.getPlugin();

    if (synchronous) {
      if (pluginConnection.methods.exportProfiles) {
        return destination.sendExports([_export], synchronous);
      } else {
        return destination.sendExport(_export, synchronous);
      }
    }
  }

  /**
   * Send an export previously created to the destination
   */
  export async function sendExport(
    destination: Destination,
    _export: Export,
    synchronous = false
  ) {
    const options = await destination.getOptions();
    const app = await destination.$get("app");
    const appOptions = await app.getOptions();
    const connection = await app.getConnection();
    const profile = await _export.$get("profile");

    const exportRuns = await ExportRun.findAll({
      where: { exportGuid: _export.guid },
    });

    if (!_export.hasChanges) {
      await _export.update({ completedAt: new Date() });
      await _export.markMostRecent();
      for (const i in exportRuns) {
        const run = await Run.findByGuid(exportRuns[i].runGuid);
        await run.increment("profilesExported");
      }
      return;
    }

    let method: ExportProfilePluginMethod;
    const { pluginConnection } = await destination.getPlugin();
    method = pluginConnection.methods.exportProfile;
    if (!method) {
      throw new Error(
        `destination ${destination.name} (${destination.guid}) has no exportProfile method`
      );
    }

    const parallelismOk = await checkSendExportParallelism(
      app,
      destination,
      "export:send",
      {
        destinationGuid: destination.guid,
        exportGuid: _export.guid,
      },
      synchronous
    );
    if (!parallelismOk) return;

    try {
      const { success, retryDelay, error } = await method({
        connection,
        app,
        appOptions,
        destination,
        destinationOptions: options,
        export: {
          profile,
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
        },
      });

      await app.checkAndUpdateParallelism("decr");

      if (!success && retryDelay && !synchronous) {
        return task.enqueueIn(
          retryDelay,
          "export:send",
          {
            destinationGuid: destination.guid,
            exportGuid: _export.guid,
          },
          `exports:${app.type}`
        );
      }

      if (!success && retryDelay && synchronous) throw error;

      await _export.update({ completedAt: new Date() });
      await _export.markMostRecent();

      for (const i in exportRuns) {
        const run = await Run.findByGuid(exportRuns[i].runGuid);
        await run.increment("profilesExported");
      }

      return { success, retryDelay, error };
    } catch (error) {
      await app.checkAndUpdateParallelism("decr");

      _export.errorMessage = error.toString();
      await _export.save();

      for (const i in exportRuns) {
        const run = await Run.findByGuid(exportRuns[i].runGuid);
        await run.increment("profilesExported");
      }

      error.message = `error exporting profile ${profile.guid} to destination ${destination.guid}: ${error}`;
      throw error;
    }
  }

  /**
   * Send all pending exports previously created to the destination in a batch.
   * Batch size is handled by the task export:sendBatch.
   */
  export async function sendExports(
    destination: Destination,
    _exports: Export[],
    synchronous = false
  ) {
    const destinationExports: ExportedProfile[] = [];

    let method: ExportProfilesPluginMethod;
    const { pluginConnection } = await destination.getPlugin();
    method = pluginConnection.methods.exportProfiles;
    if (!method) {
      throw new Error(
        `destination ${destination.name} (${destination.guid}) has no exportProfiles method`
      );
    }

    const options = await destination.getOptions();
    const app = await destination.$get("app");
    const appOptions = await app.getOptions();
    const connection = await app.getConnection();

    const parallelismOk = await checkSendExportParallelism(
      app,
      destination,
      "export:sendBatch",
      {
        destinationGuid: destination.guid,
        exportGuids: _exports.map((e) => e.guid),
      },
      synchronous
    );
    if (!parallelismOk) return;

    for (const i in _exports) {
      const _export = _exports[i];

      // do not include exports with hasChanges=false
      if (!_export.hasChanges) {
        await _export.update({ completedAt: new Date() });
        await _export.markMostRecent();
        const exportRuns = await ExportRun.findAll({
          where: { exportGuid: _export.guid },
        });
        for (const i in exportRuns) {
          const run = await Run.findByGuid(exportRuns[i].runGuid);
          await run.increment("profilesExported");
        }
      } else {
        const profile = await _export.$get("profile");
        destinationExports.push({
          profile,
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
    }

    try {
      const { success, retryDelay, errors } = await method({
        connection,
        app,
        appOptions,
        destination,
        destinationOptions: options,
        exports: destinationExports,
      });

      await app.checkAndUpdateParallelism("decr");

      if (!success && retryDelay && !synchronous) {
        return task.enqueueIn(
          retryDelay,
          "export:sendBatch",
          {
            destinationGuid: destination.guid,
            exportGuids: _exports.map((e) => e.guid),
          },
          `exports:${app.type}`
        );
      }

      const combinedError = new Error(
        `error exporting a batch of ${
          errors ? errors.length : ""
        } profiles to destination ${destination.name} (${destination.guid}): ${
          errors ? errors.map((e) => e.message).join(", ") : ""
        }`
      );
      combinedError["errors"] = errors;

      if (!success && retryDelay && synchronous) {
        throw combinedError;
      }

      if (errors) throw combinedError;

      for (const i in _exports) {
        const _export = _exports[i];
        await _export.update({ completedAt: new Date() });
        await _export.markMostRecent();
        const exportRuns = await ExportRun.findAll({
          where: { exportGuid: _export.guid },
        });
        for (const j in exportRuns) {
          const run = await Run.findByGuid(exportRuns[j].runGuid);
          await run.increment("profilesExported");
        }
      }

      return { success, retryDelay, errors };
    } catch (error) {
      await app.checkAndUpdateParallelism("decr");

      // error might have an array of errors which correspond to specific profiles, or it may be generic
      if (error.errors) {
        const profileWithErrors: string[] = error.errors.map(
          (e) => e.profileGuid
        );

        for (const i in _exports) {
          const _export = _exports[i];

          if (!profileWithErrors.includes(_export.profileGuid)) {
            // this export was OK
            await _export.update({ completedAt: new Date() });
            await _export.markMostRecent();
          } else {
            for (const j in error.errors) {
              const _error: ErrorWithProfileGuid = error.errors[j];
              if (_error.profileGuid === _export.profileGuid) {
                // this export had the error
                _export.errorMessage = error.toString();
                await _export.save();
              }
            }
          }

          const exportRuns = await ExportRun.findAll({
            where: { exportGuid: _export.guid },
          });
          for (const j in exportRuns) {
            const run = await Run.findByGuid(exportRuns[j].runGuid);
            await run.increment("profilesExported");
          }
        }
      } else {
        for (const i in _exports) {
          const _export = _exports[i];
          _export.errorMessage = error.toString();
          await _export.save();
          const exportRuns = await ExportRun.findAll({
            where: { exportGuid: _export.guid },
          });
          for (const j in exportRuns) {
            const run = await Run.findByGuid(exportRuns[j].runGuid);
            await run.increment("profilesExported");
          }
        }
      }

      throw error;
    }
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

      for (const j in destinationMappingOptions.profilePropertyRules.required) {
        const destinationProperty =
          destinationMappingOptions.profilePropertyRules.required[j];
        if (destinationProperty.key === k) {
          destinationType = destinationProperty.type;
        }
      }
      for (const j in destinationMappingOptions.profilePropertyRules.known) {
        const destinationProperty =
          destinationMappingOptions.profilePropertyRules.known[j];
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

  async function checkSendExportParallelism(
    app: App,
    destination: Destination,
    taskName: string,
    taskArgs: { [key: string]: any },
    synchronous: boolean
  ) {
    const open = await app.checkAndUpdateParallelism("incr");
    if (!open) {
      const message = `parallelism limit reached for ${app.type}`;
      if (synchronous) {
        throw new Error(message);
      } else {
        log(message + ", re-enqueuing export ${_export.guid}");
        await task.enqueueIn(
          config.tasks.timeout + 1,
          taskName,
          taskArgs,
          `exports:${app.type}`
        );
        return false;
      }
    } else {
      return true;
    }
  }
}
