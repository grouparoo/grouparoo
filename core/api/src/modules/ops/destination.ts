import {
  Destination,
  SimpleDestinationOptions,
} from "../../models/Destination";
import { DestinationGroup } from "../../models/DestinationGroup";
import { App } from "../../models/App";
import { Profile } from "../../models/Profile";
import { Run } from "../../models/Run";
import { Import } from "../../models/Import";
import { Export } from "../../models/Export";
import { ExportRun } from "../../models/ExportRun";
import { Group } from "../../models/Group";
import { MappingHelper } from "../mappingHelper";
import {
  ExportedProfile,
  ExportProfilePluginMethod,
  ExportProfilesPluginMethod,
} from "../../classes/plugin";
import { task, log, config } from "actionhero";
import { deepStrictEqual } from "assert";

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
    const destinationGroups = await destination.$get("destinationGroups");
    for (const i in destinationGroups) {
      const group: Group = await destinationGroups[i].$get("group");
      await group.run(force, destination.guid);
    }
  }

  /**
   * Track a Group
   */
  export async function trackGroup(destination: Destination, group: Group) {
    if (destination.trackAllGroups) {
      throw new Error("destination is tracking all groups");
    }

    const existingDestinationGroups = await destination.$get(
      "destinationGroups"
    );
    if (
      existingDestinationGroups.length === 1 &&
      existingDestinationGroups[0].groupGuid === group.guid
    ) {
      // no change
      return;
    }

    for (const i in existingDestinationGroups) {
      await existingDestinationGroups[i].destroy();
    }

    return DestinationGroup.create({
      groupGuid: group.guid,
      destinationGuid: destination.guid,
    });
  }

  /**
   * Un-track a Group
   */
  export async function unTrackGroups(destination: Destination) {
    if (destination.trackAllGroups) {
      throw new Error("destination is tracking all groups");
    }

    const existingDestinationGroups = await destination.$get(
      "destinationGroups"
    );
    for (const i in existingDestinationGroups) {
      await existingDestinationGroups[i].destroy();
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
  export async function destinationMappingOptions(destination: Destination) {
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

    return pluginConnection.methods.destinationMappingOptions({
      connection,
      app,
      appOptions,
      destination,
      destinationOptions,
    });
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
    sync = false,
    force = false
  ) {
    const app = await destination.$get("app");

    const appOptions = await app.getOptions();
    await app.validateOptions(appOptions);
    const destinationGroupMemberships = await destination.getDestinationGroupMemberships();

    const mapping = await destination.getMapping();
    const mappingKeys = Object.keys(mapping);
    let mappedOldProfileProperties = {};
    let mappedNewProfileProperties = {};
    mappingKeys.forEach((k) => {
      mappedOldProfileProperties[k] = oldProfileProperties[mapping[k]];
      mappedNewProfileProperties[k] = newProfileProperties[mapping[k]];
    });

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
    const destinationGroupGuids = (await destination.$get("groups")).map(
      (g) => g.guid
    );
    let toDelete = true;
    newGroupGuids.forEach((newGroupGuid) => {
      if (destinationGroupGuids.includes(newGroupGuid)) {
        toDelete = false;
      }
    });

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
        .forEach((k) => (mappedOldProfileProperties[k] = ["unknown"]));
    }

    // Send only the properties form the array that should be sent to the Destination, otherwise send the first entry in the array of profile properties
    const exportArrayProperties = await getExportArrayProperties(destination);

    for (const k in mappedOldProfileProperties) {
      if (
        mappedOldProfileProperties[k] &&
        !exportArrayProperties.includes(k) &&
        !exportArrayProperties.includes("*")
      ) {
        mappedOldProfileProperties[k] = mappedOldProfileProperties[k][0];
      }
    }
    for (const k in mappedNewProfileProperties) {
      if (
        mappedNewProfileProperties[k] &&
        !exportArrayProperties.includes(k) &&
        !exportArrayProperties.includes("*")
      ) {
        mappedNewProfileProperties[k] = mappedNewProfileProperties[k][0];
      }
    }

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
      startedAt: sync ? new Date() : undefined,
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

    if (sync) {
      if (pluginConnection.methods.exportProfiles) {
        return destination.sendExports([_export], sync);
      } else {
        return destination.sendExport(_export, sync);
      }
    } else {
      if (pluginConnection.methods.exportProfiles) {
        // run#afterBatch will pick these up
      } else {
        return task.enqueue(
          "export:send",
          {
            destinationGuid: destination.guid,
            exportGuid: _export.guid,
          },
          `exports:${app.type}`
        );
      }
    }
  }

  /**
   * Send an export previously created to the destination
   */
  export async function sendExport(
    destination: Destination,
    _export: Export,
    sync = false
  ) {
    await _export.update({ startedAt: new Date() });

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

    const parallelismOk = await checkSendExportParallelism(
      app,
      destination,
      "export:send",
      {
        destinationGuid: destination.guid,
        exportGuid: _export.guid,
      },
      sync
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
          oldProfileProperties: _export.oldProfileProperties,
          newProfileProperties: _export.newProfileProperties,
          oldGroups: _export.oldGroups,
          newGroups: _export.newGroups,
          toDelete: _export.toDelete,
        },
      });

      await app.checkAndUpdateParallelism("decr");

      if (!success && retryDelay && !sync) {
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

      if (!success && retryDelay && sync) throw error;

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
   * Batch size is handled by the task exports:sendBatch.
   */
  export async function sendExports(
    destination: Destination,
    _exports: Export[],
    sync = false
  ) {
    const destinationExports: ExportedProfile[] = [];

    let method: ExportProfilesPluginMethod;
    const { pluginConnection } = await destination.getPlugin();
    method = pluginConnection.methods.exportProfiles;

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
      sync
    );
    if (!parallelismOk) return;

    for (const i in _exports) {
      const _export = _exports[i];
      const profile = await _export.$get("profile");
      destinationExports.push({
        profile,
        oldProfileProperties: _export.oldProfileProperties,
        newProfileProperties: _export.newProfileProperties,
        oldGroups: _export.oldGroups,
        newGroups: _export.newGroups,
        toDelete: _export.toDelete,
      });
      await _export.update({ startedAt: new Date() });
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

      if (!success && retryDelay && !sync) {
        return task.enqueueIn(
          retryDelay,
          "exports:sendBatch",
          {
            destinationGuid: destination.guid,
            exportGuids: _exports.map((e) => e.guid),
          },
          `exports:${app.type}`
        );
      }

      if (!success && retryDelay && sync) {
        throw new Error(errors.map((e) => e.message).join(", "));
      }
      if (errors) {
        const error = new Error(
          `error exporting a batch of ${
            errors.length
          } profiles to destination ${destination.guid}: ${errors
            .map((e) => e.message)
            .join(", ")}`
        );
        error["errors"] = errors;
        throw error;
      }

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

      // error might have an array of errors which correspond to specific exports, or it may be generic
      if (error.errors) {
        const exportsWithErrors: string[] = error.errors.map(
          (e) => e.exportGuid
        );

        for (const i in _exports) {
          const _export = _exports[i];

          if (!exportsWithErrors.includes(_export.guid)) {
            // this export was OK
            await _export.update({ completedAt: new Date() });
            await _export.markMostRecent();
          } else {
            for (const j in error.errors) {
              const _error = error.errors[j];
              if (_error.exportGuid === _export.guid) {
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

  async function checkSendExportParallelism(
    app: App,
    destination: Destination,
    taskName: string,
    taskArgs: { [key: string]: any },
    sync: boolean
  ) {
    const open = await app.checkAndUpdateParallelism("incr");
    if (!open) {
      const message = `parallelism limit reached for ${app.type}`;
      if (sync) {
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
