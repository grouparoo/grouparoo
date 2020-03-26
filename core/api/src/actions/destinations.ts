import { Action, api } from "actionhero";
import { Destination } from "../models/Destination";
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
    const destinations = await Destination.findAll({
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    response.destinations = await Promise.all(
      destinations.map(async (conn) => conn.apiData())
    );

    response.total = await Destination.count();
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

export class DestinationColumns extends Action {
  constructor() {
    super();
    this.name = "destination:columns";
    this.description =
      "generate a preview of the columns the destination provides and sample data";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findOne({
      where: { guid: params.guid },
    });

    if (!destination) {
      throw new Error("destination not found");
    }

    const { rows, columns } = await destination.columns();
    response.rows = rows;
    response.columns = columns;
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
      name: { required: true },
      appGuid: { required: true },
      trackAllGroups: { required: false },
      options: { required: false },
      mappings: { required: false, default: {} },
    };
  }

  async run({ params, response }) {
    const transaction = await api.sequelize.transaction();

    try {
      const destination = await Destination.create(params, { transaction });

      if (params.options) {
        await destination.setOptions(params.options);
      }
      if (params.mappings) {
        await destination.setMapping(params.mappings);
      }

      await transaction.commit();

      response.destination = await destination.apiData();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
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
      appGuid: { required: false },
      trackAllGroups: { required: false },
      options: { required: false },
      mappings: { required: false },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findOne({
      where: { guid: params.guid },
    });

    if (!destination) {
      throw new Error("destination not found");
    }

    await destination.update(params);
    if (params.options) {
      await destination.setOptions(params.options);
    }
    if (params.mappings) {
      await destination.setMapping(params.mappings);
    }

    response.destination = await destination.apiData();
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
    const destination = await Destination.findOne({
      where: { guid: params.guid },
    });
    if (!destination) {
      throw new Error("destination not found");
    }

    const group = await Group.findOne({
      where: { guid: params.groupGuid },
    });
    if (!group) {
      throw new Error("group not found");
    }

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
      groupGuid: { required: true },
    };
  }

  async run({ params, response }) {
    const destination = await Destination.findOne({
      where: { guid: params.guid },
    });
    if (!destination) {
      throw new Error("destination not found");
    }

    const group = await Group.findOne({
      where: { guid: params.groupGuid },
    });
    if (!group) {
      throw new Error("group not found");
    }

    await destination.unTrackGroup(group);
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
    const destination = await Destination.findOne({
      where: { guid: params.guid },
    });

    if (!destination) {
      throw new Error("destination not found");
    }

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
    const destination = await Destination.findOne({
      where: { guid: params.guid },
    });

    if (!destination) {
      throw new Error("destination not found");
    }

    await destination.destroy();
    response.success = true;
  }
}
