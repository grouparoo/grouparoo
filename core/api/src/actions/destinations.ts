import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Destination } from "../models/Destination";
import { App } from "../models/App";
import { Profile } from "../models/Profile";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { GrouparooPlugin } from "../classes/plugin";

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

  async run({ params, response }) {
    const where = {};

    if (params.state) {
      where["state"] = params.state;
    }

    const destinations = await Destination.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    response.destinations = await Promise.all(
      destinations.map(async (conn) => conn.apiData())
    );

    response.total = await Destination.scope(null).count({ where });
  }
}

export class DestinationOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:options";
    this.description = "enumerate the options for creating a new destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {};
  }

  async run({ response }) {
    response.connections = [];
    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections.forEach((connection) => {
          response.connections.push({
            name: connection.name,
            direction: connection.direction,
            description: connection.description,
            app: connection.app,
            options: connection.options,
          });
        });
      }
    });
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

  async run({ response }) {
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

    const connectionApps = [];
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

    response.connectionApps = connectionApps;
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
      appGuid: { required: true },
      trackAllGroups: { required: false },
      options: { required: false },
      mapping: { required: false, default: {} },
      destinationGroupMemberships: { required: false },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.create({
      name: params.name,
      type: params.type,
      appGuid: params.appGuid,
      trackAllGroups: params.trackAllGroups,
    });

    if (params.options) {
      await destination.setOptions(params.options);
    }

    if (params.mapping) {
      await destination.setMapping(params.mapping);
    }

    if (params.destinationGroupMemberships) {
      await destination.setDestinationGroupMemberships(
        params.destinationGroupMemberships
      );
    }

    if (params.state) {
      await destination.update({ state: params.state });
    }

    response.destination = await destination.apiData();
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
      guid: { required: true },
      name: { required: false },
      state: { required: false },
      trackAllGroups: { required: false },
      options: { required: false },
      mapping: { required: false },
      destinationGroupMemberships: { required: false },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);

    if (params.options) {
      await destination.setOptions(params.options);
    }

    if (params.mapping) {
      await destination.setMapping(params.mapping);
    }

    if (params.destinationGroupMemberships) {
      await destination.setDestinationGroupMemberships(
        params.destinationGroupMemberships
      );
    }

    await destination.update(params);

    response.destination = await destination.apiData();
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
      guid: { required: true },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);

    const options =
      typeof params.options === "string"
        ? JSON.parse(params.options)
        : params.options;

    response.options = await destination.destinationConnectionOptions(options);
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
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);
    response.options = await destination.destinationMappingOptions();
  }
}

export class DestinationTrackGroup extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:trackGroup";
    this.description = "add a group to a destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "write" };
    this.inputs = {
      guid: { required: true },
      groupGuid: { required: true },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);
    const group = await Group.findByGuid(params.groupGuid);
    await destination.trackGroup(group);
    response.destination = await destination.apiData();
  }
}

export class DestinationUnTrackGroup extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:unTrackGroup";
    this.description = "add a group to a destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);
    await destination.unTrackGroups();
    response.destination = await destination.apiData();
  }
}

export class DestinationView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:view";
    this.description = "view a destination";
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);
    response.destination = await destination.apiData();
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
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const destination = await Destination.findByGuid(params.guid);
    await destination.exportGroupMembers();
    response.success = true;
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
      guid: { required: true },
      groupGuid: { required: false },
      profileGuid: { required: false },
      mapping: { required: false },
      destinationGroupMemberships: { required: false },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);

    let profile: Profile;
    if (params.profileGuid) {
      profile = await Profile.findByGuid(params.profileGuid);
    } else {
      const group = await Group.findByGuid(params.groupGuid);
      const groupMember = await GroupMember.findOne({
        where: { groupGuid: group.guid },
      });
      profile = await Profile.findByGuid(groupMember.profileGuid);
    }

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
        (dgm) => (destinationGroupMemberships[dgm.groupGuid] = dgm.remoteKey)
      );
    } else {
      try {
        // this is a GET, so we need to parse
        destinationGroupMemberships = JSON.parse(destinationGroupMemberships);
      } catch {}
    }

    if (
      !params.mapping &&
      !params.groupGuid &&
      !params.destinationGroupMemberships
    ) {
      await destination.checkProfileWillBeExported(profile);
    }

    response.profile = await destination.profilePreview(
      profile,
      mapping,
      destinationGroupMemberships
    );
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
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const destination = await Destination.findByGuid(params.guid);
    await destination.destroy();
    response.success = true;
  }
}
