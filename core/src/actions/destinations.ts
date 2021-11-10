import { api } from "actionhero";
import { CLS } from "../modules/cls";
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

export class DestinationsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destinations:list";
    this.description = "list all the destinations";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      state: { required: false },
      modelId: { required: false },
      order: {
        required: false,
        formatter: APIData.ensureObject,
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
      app: AsyncReturnType<App["apiData"]>;
      connection: PluginConnection;
    }> = [];

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
  constructor() {
    super();
    this.name = "destination:create";
    this.description = "create a destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "write" };
    this.inputs = {
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
      destinationGroupMemberships: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
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
      options: { required: false, formatter: APIData.ensureObject },
      mapping: { required: false, formatter: APIData.ensureObject },
      syncMode: { required: false },
      destinationGroupMemberships: { required: false },
      groupId: { required: false },
      collection: { required: false },
      triggerExport: { required: false, formatter: APIData.ensureBoolean },
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

    // do not set groupId or collection here, that's handled within the updateTracking method
    await destination.update({
      name: params.name,
      type: params.type,
      modelId: params.modelId,
      appId: params.appId,
      state: params.state,
      syncMode: params.syncMode,
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
  constructor() {
    super();
    this.name = "destination:connectionOptions";
    this.description = "return option choices from this destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {
      id: { required: true },
      options: { required: false, formatter: APIData.ensureObject },
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.findById(params.id);
    return {
      options: await destination.destinationConnectionOptions(params.options),
    };
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
      "get the list of record properties this destination can handle as arrays";
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
    };
  }

  async runWithinTransaction({ params }) {
    const destination = await Destination.findById(params.id);
    await destination.exportMembers();
    return { success: true };
  }
}

export class DestinationRecordPreview extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "destination:recordPreview";
    this.description =
      "view a preview of a record being exported to this destination";
    this.outputExample = {};
    this.permission = { topic: "destination", mode: "read" };
    this.inputs = {
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
    };
  }

  async runWithinTransaction({ params }) {
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

    return {
      record: await destination.recordPreview(
        record,
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
      // destination:destroy will be enqueued by the `destroy` system task
      await destination.update({ state: "deleted" });
    }

    await ConfigWriter.run();

    return { success: true };
  }
}
