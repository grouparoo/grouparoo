import { api, ParamsFrom } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Destination } from "../models/Destination";
import { App } from "../models/App";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { Group } from "../models/Group";
import { Run } from "../models/Run";
import { GroupMember } from "../models/GroupMember";
import { GrouparooPlugin, PluginConnection } from "../classes/plugin";
import { OptionHelper } from "../modules/optionHelper";
import { destinationTypeConversions } from "../modules/destinationTypeConversions";
import { AsyncReturnType } from "type-fest";
import { ConfigWriter } from "../modules/configWriter";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { WhereAttributeHash } from "sequelize/types";
import { DestinationOps } from "../modules/ops/destination";

export class DestinationsList extends AuthenticatedAction {
  name = "destinations:list";
  description = "list all the destinations";
  outputExample = {};
  permission: ActionPermission = { topic: "destination", mode: "read" };
  inputs = {
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    state: { required: false },
    modelId: { required: false },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [
        ["name", "desc"],
        ["createdAt", "desc"],
      ],
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<DestinationsList>;
  }) {
    const where: WhereAttributeHash = {};

    if (params.state) where["state"] = params.state;
    if (params.modelId) where["modelId"] = params.modelId;

    const total = await Destination.scope(null).count({ where });

    const destinations = await Destination.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    return {
      total,
      destinations: await Promise.all(destinations.map((d) => d.apiData())),
    };
  }
}

export class DestinationConnectionApps extends AuthenticatedAction {
  name = "destinations:connectionApps";
  description =
    "enumerate the connection and app pairs for creating a new destination";
  outputExample = {};
  permission: ActionPermission = { topic: "destination", mode: "read" };

  async runWithinTransaction() {
    const connectionApps: {
      app: AsyncReturnType<App["apiData"]>;
      connection: PluginConnection;
    }[] = [];

    const apps = await App.findAll();
    const existingAppTypes = apps.map((a) => a.type);

    let importConnections: PluginConnection[] = [];
    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections
          .filter((c) => c.direction === "export")
          .filter((c) => {
            let match = false;
            for (const app of c.apps) {
              if (existingAppTypes.includes(app)) match = true;
            }
            return match;
          })
          .map((c) => importConnections.push(c));
      }
    });

    for (const app of apps) {
      for (const connection of importConnections) {
        if (connection.apps.includes(app.type)) {
          connectionApps.push({
            app: await app.apiData(),
            connection,
          });
        }
      }
    }

    const environmentVariableOptions =
      OptionHelper.getEnvironmentVariableOptionsForTopic("destination");

    return { connectionApps, environmentVariableOptions };
  }
}

export class DestinationCreate extends AuthenticatedAction {
  name = "destination:create";
  description = "create a destination";
  outputExample = {};
  permission: ActionPermission = { topic: "destination", mode: "write" };
  inputs = {
    name: { required: false },
    type: { required: true },
    modelId: { required: true },
    state: { required: false },
    appId: { required: true },
    options: { required: false, formatter: APIData.ensureObject },
    mapping: {
      required: false,
      formatter: APIData.ensureObject,
      default: {},
    },
    syncMode: { required: false },
    destinationGroupMemberships: {
      required: false,
      formatter: APIData.ensureObject,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<DestinationCreate>;
  }) {
    const destination = await Destination.create({
      name: params.name,
      type: params.type,
      modelId: params.modelId,
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

    await ConfigWriter.run();

    return { destination: await destination.apiData() };
  }
}

export class DestinationEdit extends AuthenticatedAction {
  name = "destination:edit";
  description = "edit a destination";
  outputExample = {};
  permission: ActionPermission = { topic: "destination", mode: "write" };
  inputs = {
    id: { required: true },
    name: { required: false },
    state: { required: false },
    options: { required: false, formatter: APIData.ensureObject },
    mapping: { required: false, formatter: APIData.ensureObject },
    deliveryMode: { required: false },
    syncMode: { required: false },
    destinationGroupMemberships: {
      required: false,
      formatter: APIData.ensureObject,
    },
    groupId: { required: false },
    collection: {
      required: false,
      formatter: (p: unknown) => p as Destination["collection"],
    },
    triggerExport: { required: false, formatter: APIData.ensureBoolean },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<DestinationEdit>;
  }) {
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

    // do not set groupId or collection here, that's handled within the updateTracking method
    await destination.update({
      name: params.name,
      state: params.state,
      syncMode: params.syncMode,
      deliveryMode: params.deliveryMode,
    });

    let oldRun: Run;
    let newRun: Run;
    if (params.collection !== undefined || params.groupId !== undefined) {
      const updateResponse = await destination.updateTracking(
        params.collection,
        params.groupId
      );
      oldRun = updateResponse.oldRun;
      newRun = updateResponse.newRun;
    }

    if (params.triggerExport && !newRun && !oldRun) {
      newRun = await destination.exportMembers();
    }

    await ConfigWriter.run();

    return {
      destination: await destination.apiData(),
      oldRun: oldRun ? await oldRun.apiData() : undefined,
      newRun: newRun ? await newRun.apiData() : undefined,
    };
  }
}

export class DestinationConnectionOptions extends AuthenticatedAction {
  name = "destination:connectionOptions";
  description = "return option choices from this destination";
  outputExample = {};
  permission: ActionPermission = { topic: "destination", mode: "read" };
  inputs = {
    id: { required: true },
    options: { required: false, formatter: APIData.ensureObject },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<DestinationConnectionOptions>;
  }) {
    const destination = await Destination.findById(params.id);
    return {
      options: await destination.destinationConnectionOptions(params.options),
    };
  }
}

export class DestinationMappingOptions extends AuthenticatedAction {
  name = "destination:mappingOptions";
  description = "return option choices from this destination mapping";
  outputExample = {};
  permission: ActionPermission = { topic: "destination", mode: "read" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<DestinationMappingOptions>;
  }) {
    const destination = await Destination.findById(params.id);
    const options = await destination.destinationMappingOptions(false); // never use cache when displaying to the user

    const _destinationTypeConversions: Record<string, any> = {};
    for (const [k, v] of Object.entries(destinationTypeConversions)) {
      _destinationTypeConversions[k] = Object.keys(v);
    }

    return { options, destinationTypeConversions: _destinationTypeConversions };
  }
}

export class DestinationExportArrayProperties extends AuthenticatedAction {
  name = "destination:exportArrayProperties";
  description =
    "get the list of record properties this destination can handle as arrays";
  outputExample = {};
  permission: ActionPermission = { topic: "destination", mode: "read" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<DestinationExportArrayProperties>;
  }) {
    const destination = await Destination.findById(params.id);
    return {
      exportArrayProperties: await destination.getExportArrayProperties(),
    };
  }
}

export class DestinationView extends AuthenticatedAction {
  name = "destination:view";
  description = "view a destination";
  permission: ActionPermission = { topic: "destination", mode: "read" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<DestinationView>;
  }) {
    const destination = await Destination.findById(params.id);
    return { destination: await destination.apiData() };
  }
}

export class DestinationExport extends AuthenticatedAction {
  name = "destination:export";
  description =
    "export the member or members of the groups tracked by this destination";
  permission: ActionPermission = { topic: "destination", mode: "write" };
  inputs = {
    id: { required: true },
    recordId: { required: false },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<DestinationExport>;
  }) {
    const destination = await Destination.findById(params.id);
    if (params.recordId) {
      const record = await GrouparooRecord.findById(params.recordId);
      await destination.exportRecord(record, true);
    } else {
      await destination.exportMembers();
    }
    return { success: true };
  }
}

export class DestinationRecordPreview extends AuthenticatedAction {
  name = "destination:recordPreview";
  description = "view a preview of a record being exported to this destination";
  outputExample = {};
  permission: ActionPermission = { topic: "destination", mode: "read" };
  inputs = {
    id: { required: true },
    collection: { required: false },
    groupId: { required: false },
    modelId: { required: false },
    recordId: { required: false },
    mapping: { required: false, formatter: APIData.ensureObject },
    destinationGroupMemberships: {
      required: false,
      formatter: APIData.ensureObject,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<DestinationRecordPreview>;
  }) {
    const destination = await Destination.findById(params.id);

    let record: GrouparooRecord;
    const collection = params.collection ?? destination.collection;

    if (params.recordId) {
      record = await GrouparooRecord.findById(params.recordId);
    } else if (collection === "group" && params.groupId) {
      const group = await Group.findById(params.groupId);
      const groupMember = await GroupMember.findOne({
        where: { groupId: group.id },
      });
      if (groupMember) {
        record = await GrouparooRecord.findById(groupMember.recordId);
      }
    } else if (params.modelId) {
      record = await GrouparooRecord.findOne({
        where: { modelId: params.modelId },
      });
    }

    if (!record) return;

    await record.buildNullProperties(); // the preview may include a brand new property

    let mapping = params.mapping;
    if (!mapping) {
      mapping = await destination.getMapping();
    }

    let destinationGroupMemberships = params.destinationGroupMemberships;
    if (!destinationGroupMemberships) {
      const destinationGroupMembershipsArray =
        await destination.getDestinationGroupMemberships();
      destinationGroupMemberships = {};
      destinationGroupMembershipsArray.map(
        (dgm) => (destinationGroupMemberships[dgm.groupId] = dgm.remoteKey)
      );
    }

    if (
      !params.mapping &&
      !params.groupId &&
      !params.destinationGroupMemberships
    ) {
      await destination.checkRecordWillBeExported(record);
    }

    const recordPreview = await destination.recordPreview(
      record,
      mapping,
      destinationGroupMemberships
    );

    const groups = await record.$get("groups");
    const destinations = await DestinationOps.relevantFor(record, groups);

    return {
      record: recordPreview,
      groups: await Promise.all(groups.map((group) => group.apiData())),
      destinations: await Promise.all(
        destinations.map((destination) => destination.apiData(false, false))
      ),
    };
  }
}

export class DestinationDestroy extends AuthenticatedAction {
  name = "destination:destroy";
  description = "destroy a destination";
  outputExample = {};
  permission: ActionPermission = { topic: "destination", mode: "write" };
  inputs = {
    id: { required: true },
    force: {
      required: true,
      default: false,
      formatter: (p: string | boolean) => p.toString().toLowerCase() === "true",
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<DestinationDestroy>;
  }) {
    const destination = await Destination.findById(params.id);
    if (params.force) {
      await destination.destroy();
    } else {
      // destination:destroy will be enqueued by the `destroy` system task
      await destination.update({ state: "deleted" });
    }

    await ConfigWriter.run();

    return { success: true };
  }
}
