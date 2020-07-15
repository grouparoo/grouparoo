import {
  Destination,
  SimpleDestinationOptions,
} from "../../models/Destination";
import { DestinationGroup } from "../../models/DestinationGroup";
import { Profile } from "../../models/Profile";
import { Run } from "../../models/Run";
import { Import } from "../../models/Import";
import { Export } from "../../models/Export";
import { Group } from "../../models/Group";
import { MappingHelper } from "../mappingHelper";
import { ExportProfilePluginMethod } from "../../classes/plugin";
import { task, log, config } from "actionhero";

export namespace DestinationOps {
  /**
   * Export all the Group Members of the Groups that this Destination is Tracking
   */
  export async function exportGroupMembers(destination: Destination) {
    const destinationGroups = await destination.$get("destinationGroups");
    for (const i in destinationGroups) {
      const group: Group = await destinationGroups[i].$get("group");
      await group.run(true, destination.guid);
    }
  }

  /**
   * Track a Group
   */
  export async function trackGroup(destination: Destination, group: Group) {
    if (destination.trackAllGroups)
      throw new Error("destination is tracking all groups");

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
    if (destination.trackAllGroups)
      throw new Error("destination is tracking all groups");

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

    if (!pluginConnection.methods.destinationOptions)
      throw new Error(
        `cannot return destination options for ${destination.type}`
      );

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

  /**
   * Given a Destination and a Profile (and lots of related data), create all the exports that should be sent
   */
  export async function exportProfile(
    destination: Destination,
    profile: Profile,
    runs: Run[],
    imports: Array<Import>,
    oldProfileProperties: { [key: string]: any },
    newProfileProperties: { [key: string]: any },
    oldGroups: Array<Group>,
    newGroups: Array<Group>,
    sync = false
  ) {
    const app = await destination.$get("app");
    let method: ExportProfilePluginMethod;
    const { pluginConnection } = await destination.getPlugin();
    method = pluginConnection.methods.exportProfile;

    if (!method)
      throw new Error(`cannot find an export method for app type ${app.type}`);

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
        .forEach((k) => (mappedOldProfileProperties[k] = "unknown"));
    }

    const _export = await Export.create({
      destinationGuid: destination.guid,
      profileGuid: profile.guid,
      runGuids: runs ? runs.map((run) => run.guid) : [],
      startedAt: sync ? new Date() : undefined,
      oldProfileProperties: mappedOldProfileProperties,
      newProfileProperties: mappedNewProfileProperties,
      oldGroups: oldGroupNames.sort(),
      newGroups: newGroupNames.sort(),
      toDelete,
    });

    if (runs)
      await Promise.all(runs.map((run) => run.increment("exportsCreated")));

    await _export.associateImports(imports);

    if (sync) {
      return destination.sendExport(_export, sync);
    } else {
      await task.enqueue(
        "export:send",
        {
          destinationGuid: destination.guid,
          exportGuid: _export.guid,
        },
        `exports:${app.type}`
      );
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

    let method: ExportProfilePluginMethod;
    const { pluginConnection } = await destination.getPlugin();
    method = pluginConnection.methods.exportProfile;

    const open = await app.checkAndUpdateParallelism("incr");
    if (!open) {
      const message = `parallelism limit reached for ${app.type}`;
      if (sync) {
        throw new Error(message);
      } else {
        log(message + ", re-enqueuing export ${_export.guid}");
        return task.enqueueIn(
          config.tasks.timeout + 1,
          "export:send",
          {
            destinationGuid: destination.guid,
            exportGuid: _export.guid,
          },
          `exports:${app.type}`
        );
      }
    }

    try {
      const { success, retryDelay, error } = await method({
        connection,
        app,
        appOptions,
        destination,
        destinationOptions: options,
        profile,
        oldProfileProperties: _export.oldProfileProperties,
        newProfileProperties: _export.newProfileProperties,
        oldGroups: _export.oldGroups,
        newGroups: _export.newGroups,
        toDelete: _export.toDelete,
      });

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

      if (_export.runGuids) {
        for (const i in _export.runGuids) {
          const run = await Run.findByGuid(_export.runGuids[i]);
          await run.increment("profilesExported");
        }
      }

      await app.checkAndUpdateParallelism("decr");
      return { success, retryDelay, error };
    } catch (error) {
      _export.errorMessage = error.toString();
      await _export.save();

      if (_export.runGuids) {
        for (const i in _export.runGuids) {
          const run = await Run.findByGuid(_export.runGuids[i]);
          await run.increment("profilesExported");
        }
      }

      await app.checkAndUpdateParallelism("decr");
      error.message = `error exporting profile ${profile.guid} to destination ${destination.guid}: ${error}`;
      throw error;
    }
  }
}
