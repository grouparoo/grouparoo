import { Action, api } from "actionhero";
import { Destination } from "../models/Destination";
import { App } from "../models/App";
import { Group } from "../models/Group";
import { GrouparooPlugin } from "../classes/plugin";

export class DestinationsList extends Action {
  constructor() {
    super();
    this.name = "destinations:list";
    this.description = "list all the destinations";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      limit: { required: true, default: 1000, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      state: { required: false },
      order: {
        required: true,
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

export class DestinationOptions extends Action {
  constructor() {
    super();
    this.name = "destination:options";
    this.description = "enumerate the options for creating a new destination";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
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

export class DestinationConnectionApps extends Action {
  constructor() {
    super();
    this.name = "destinations:connectionApps";
    this.description =
      "enumerate the connection and app pairs for creating a new destination";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
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

export class DestinationCreate extends Action {
  constructor() {
    super();
    this.name = "destination:create";
    this.description = "create a destination";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
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

export class DestinationEdit extends Action {
  constructor() {
    super();
    this.name = "destination:edit";
    this.description = "edit a destination";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
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
    await destination.update(params);

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

    response.destination = await destination.apiData();
  }
}

export class DestinationConnectionOptions extends Action {
  constructor() {
    super();
    this.name = "destination:connectionOptions";
    this.description = "return option choices from this destination";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);
    response.options = await destination.destinationConnectionOptions();
  }
}

export class DestinationMappingOptions extends Action {
  constructor() {
    super();
    this.name = "destination:mappingOptions";
    this.description = "return option choices from this destination mapping";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);
    response.mappingOptions = await destination.destinationMappingOptions();
  }
}

export class DestinationTrackGroup extends Action {
  constructor() {
    super();
    this.name = "destination:trackGroup";
    this.description = "add a group to a destination";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
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

export class DestinationUnTrackGroup extends Action {
  constructor() {
    super();
    this.name = "destination:unTrackGroup";
    this.description = "add a group to a destination";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);
    await destination.unTrackGroup();
    response.destination = await destination.apiData();
  }
}

export class DestinationView extends Action {
  constructor() {
    super();
    this.name = "destination:view";
    this.description = "view a destination";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findByGuid(params.guid);
    response.destination = await destination.apiData();
  }
}

export class DestinationDestroy extends Action {
  constructor() {
    super();
    this.name = "destination:destroy";
    this.description = "destroy a destination";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
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
