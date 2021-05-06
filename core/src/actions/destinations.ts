import { api } from "actionhero";
import { CLS } from "../modules/cls";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Destination } from "../models/Destination";
import { App } from "../models/App";
import { Profile } from "../models/Profile";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { GrouparooPlugin, PluginConnection } from "../classes/plugin";
import { OptionHelper } from "../modules/optionHelper";
import { destinationTypeConversions } from "../modules/destinationTypeConversions";
import { AsyncReturnType } from "type-fest";

export class DestinationsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destinations:list";
    this.description = "list all the destinations";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      state: { required: false },
      order: {
        required: false,
        default: [
          ["name", "desc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const where = {};

    if (params.state) where["state"] = params.state;

    const total = await Destination.scope(null).count({ where });

    const destinations = await Destination.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    return {
      total,
      destinations: await Promise.all(
        destinations.map(async (conn) => conn.apiData())
      ),
    };
  }
}

export class DestinationConnectionApps extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destinations:connectionApps";
    this.description =
      "enumerate the connection and app pairs for creating a new destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {};
  }

  async runWithinTransaction() {
    const connectionApps: Array<{
      app: AsyncReturnType<typeof App.prototype.apiData>;
      connection: PluginConnection;
    }> = [];

    const apps = await App.findAll();
    const existingAppTypes = apps.map((a) => a.type);

    let importConnections = [];
    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections
          .filter((c) => c.direction === "export")
          .filter((c) => existingAppTypes.includes(c.app))
          .map((c) => importConnections.push(c));
      }
    });

    for (const i in apps) {
      for (const j in importConnections) {
        if (apps[i].type === importConnections[j].app) {
          connectionApps.push({
            app: await apps[i].apiData(),
            connection: importConnections[j],
          });
        }
      }
    }

    const environmentVariableOptions = OptionHelper.getEnvironmentVariableOptionsForTopic(
      "destination"
    );

    return { connectionApps, environmentVariableOptions };
  }
}

export class DestinationCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:create";
    this.description = "create a destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "write" };
    this.inputs = {
      name: { required: false },
      type: { required: true },
      state: { required: false },
      appId: { required: true },
      options: { required: false },
      mapping: { required: false, default: {} },
      syncMode: { required: false },
      destinationGroupMemberships: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.create({
      name: params.name,
      type: params.type,
      appId: params.appId,
      syncMode: params.syncMode,
    });
    if (params.options) await destination.setOptions(params.options);
    if (params.mapping) {
      await destination.setMapping(params.mapping, undefined, false);
    }
    if (params.destinationGroupMemberships)
      await destination.setDestinationGroupMemberships(
        params.destinationGroupMemberships
      );
    if (params.state) await destination.update({ state: params.state });

    return { destination: await destination.apiData() };
  }
}

export class DestinationEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:edit";
    this.description = "edit a destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "write" };
    this.inputs = {
      id: { required: true },
      name: { required: false },
      state: { required: false },
      options: { required: false },
      mapping: { required: false },
      syncMode: { required: false },
      destinationGroupMemberships: { required: false },
      trackedGroupId: { required: false },
      triggerExport: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.findById(params.id);
    if (params.options) await destination.setOptions(params.options);
    if (params.mapping) {
      await destination.setMapping(params.mapping, undefined, false);
    }
    if (params.destinationGroupMemberships) {
      await destination.setDestinationGroupMemberships(
        params.destinationGroupMemberships
      );
    }

    await destination.update(params);

    if (
      params.trackedGroupId &&
      params.trackedGroupId !== "_none" &&
      params.trackedGroupId !== destination.groupId
    ) {
      const group = await Group.findById(params.trackedGroupId);
      await destination.trackGroup(group);
    } else if (
      (params.trackedGroupId === "_none" || params.trackedGroupId === null) &&
      destination.groupId
    ) {
      await destination.unTrackGroup();
    } else if (params.triggerExport) {
      await destination.exportGroupMembers(true);
    }

    return { destination: await destination.apiData() };
  }
}

export class DestinationConnectionOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:connectionOptions";
    this.description = "return option choices from this destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {
      id: { required: true },
      options: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.findById(params.id);

    const options =
      typeof params.options === "string"
        ? JSON.parse(params.options)
        : params.options;

    return { options: await destination.destinationConnectionOptions(options) };
  }
}

export class DestinationMappingOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:mappingOptions";
    this.description = "return option choices from this destination mapping";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.findById(params.id);
    const options = await destination.destinationMappingOptions(false); // never use cache when displaying to the user

    const _destinationTypeConversions: { [key: string]: Array<string> } = {};
    for (const k in destinationTypeConversions) {
      _destinationTypeConversions[k] = Object.keys(
        destinationTypeConversions[k]
      );
    }

    return { options, destinationTypeConversions: _destinationTypeConversions };
  }
}

export class DestinationExportArrayProperties extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:exportArrayProperties";
    this.description =
      "get the list of profile properties this destination can handle as arrays";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.findById(params.id);
    return {
      exportArrayProperties: await destination.getExportArrayProperties(),
    };
  }
}

export class DestinationView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:view";
    this.description = "view a destination";
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.findById(params.id);
    return { destination: await destination.apiData() };
  }
}

export class DestinationExport extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:export";
    this.description =
      "export the members of the groups tracked by this destination";
    this.permission = { topic: "destination", mode: "write" };
    this.inputs = {
      id: { required: true },
      force: { required: false, default: true },
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.findById(params.id);
    await destination.exportGroupMembers(params.force);
    return { success: true };
  }
}

export class DestinationProfilePreview extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:profilePreview";
    this.description =
      "view a preview of a profile being exported to this destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {
      id: { required: true },
      groupId: { required: false },
      profileId: { required: false },
      mapping: { required: false },
      destinationGroupMemberships: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.findById(params.id);

    let profile: Profile;
    if (params.profileId) {
      profile = await Profile.findById(params.profileId);
    } else {
      const group = await Group.findById(params.groupId);
      const groupMember = await GroupMember.findOne({
        where: { groupId: group.id },
      });
      if (groupMember) {
        profile = await Profile.findById(groupMember.profileId);
      }
    }

    if (!profile) return;

    await profile.buildNullProperties(); // the preview may include a brand new property

    let mapping = params.mapping;
    if (!mapping) {
      mapping = await destination.getMapping();
    } else {
      try {
        // this is a GET, so we need to parse
        mapping = JSON.parse(mapping);
      } catch {}
    }

    let destinationGroupMemberships = params.destinationGroupMemberships;
    if (!destinationGroupMemberships) {
      const destinationGroupMembershipsArray = await destination.getDestinationGroupMemberships();
      destinationGroupMemberships = {};
      destinationGroupMembershipsArray.map(
        (dgm) => (destinationGroupMemberships[dgm.groupId] = dgm.remoteKey)
      );
    } else {
      try {
        // this is a GET, so we need to parse
        destinationGroupMemberships = JSON.parse(destinationGroupMemberships);
      } catch {}
    }

    if (
      !params.mapping &&
      !params.groupId &&
      !params.destinationGroupMemberships
    ) {
      await destination.checkProfileWillBeExported(profile);
    }

    return {
      profile: await destination.profilePreview(
        profile,
        mapping,
        destinationGroupMemberships
      ),
    };
  }
}

export class DestinationDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:destroy";
    this.description = "destroy a destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "write" };
    this.inputs = {
      id: { required: true },
      force: {
        required: true,
        default: false,
        formatter: (p: string | boolean) =>
          p.toString().toLowerCase() === "true",
      },
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.findById(params.id);
    if (params.force) {
      await destination.destroy();
    } else {
      await destination.update({ state: "deleted" });
      await CLS.enqueueTask("destination:destroy", {
        destinationId: destination.id,
      });
    }

    return { success: true };
  }
}
