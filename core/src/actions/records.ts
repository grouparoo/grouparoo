import { config } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { RecordProperty } from "../models/RecordProperty";
import { internalRun } from "../modules/internalRun";
import { Op } from "sequelize";
import { ConfigWriter } from "../modules/configWriter";
import { RecordOps } from "../modules/ops/record";
import Sequelize from "sequelize";
import { APIData } from "../modules/apiData";
import {
  ActionPermissionMode,
  ActionPermissionTopic,
} from "../models/Permission";
import { CLSAction } from "../classes/actions/clsAction";

export class RecordsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "records:list";
    this.description = "list all the records in a group";
    this.outputExample = {};
    this.permission = { topic: "record", mode: "read" };
    this.inputs = {
      groupId: { required: false },
      searchKey: { required: false },
      searchValue: { required: false },
      state: { required: false },
      modelId: { required: false },
      caseSensitive: {
        required: false,
        formatter: APIData.ensureBoolean,
      },
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      order: {
        required: false,
        formatter: APIData.ensureObject,
        default: [["createdAt", "asc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const { records, total } = await RecordOps.search(params);
    return {
      total,
      records: await Promise.all(records.map((record) => record.apiData())),
    };
  }
}

export class RecordAutocompleteRecordProperty extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "records:autocompleteRecordProperty";
    this.description = "return matching record property values";
    this.outputExample = {};
    this.permission = { topic: "record", mode: "read" };
    this.inputs = {
      propertyId: { required: true },
      match: { required: true },
      limit: { required: false, default: 25, formatter: APIData.ensureNumber },
      offset: { required: false, default: 0, formatter: APIData.ensureNumber },
      order: {
        required: false,
        formatter: APIData.ensureObject,
        default: [["rawValue", "asc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const op = config.sequelize.dialect === "postgres" ? Op.iLike : Op.like;
    const rawValueWhereClause = {};
    rawValueWhereClause[op] = `%${params.match}%`;

    const recordProperties = await RecordProperty.findAll({
      attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("rawValue")), "rawValue"],
        "propertyId",
      ],
      where: {
        propertyId: params.propertyId,
        rawValue: rawValueWhereClause,
      },
      group: ["rawValue", "propertyId"],
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    return {
      recordProperties: await Promise.all(
        recordProperties.map((prop) => prop.getValue())
      ),
    };
  }
}

export class RecordsImportAndUpdate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "records:importAndUpdate";
    this.description = "create a run to import and update every record";
    this.outputExample = {};
    this.permission = { topic: "record", mode: "write" };
    this.inputs = {};
  }

  async runWithinTransaction({ session }) {
    const run = await internalRun("teamMember", session.teamMember.id);
    return { run: await run.apiData() };
  }
}

export class RecordCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "record:create";
    this.description = "create a record";
    this.outputExample = {};
    this.permission = { topic: "record", mode: "write" };
    this.inputs = {
      modelId: { required: true },
      properties: {
        required: false,
        default: {},
        formatter: APIData.ensureObject,
      },
    };
  }

  async runWithinTransaction({ params }) {
    const record = new GrouparooRecord({ modelId: params.modelId });
    await record.save();

    if (params.properties) {
      await record.addOrUpdateProperties(params.properties);
    }
    const groups = await record.$get("groups");

    await ConfigWriter.run();

    return {
      record: await record.apiData(),
      groups: await Promise.all(groups.map((group) => group.apiData())),
    };
  }
}

export class RecordImport extends CLSAction {
  permission: {
    topic: ActionPermissionTopic;
    mode: ActionPermissionMode;
  };

  constructor() {
    super();
    this.name = "record:import";
    this.description = "fully import a record";
    this.outputExample = {};
    this.permission = { topic: "record", mode: "write" };
    this.middleware = ["authenticated-action"];
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const record = await GrouparooRecord.findById(params.id);

    await record.buildNullProperties();
    await record.markPending();
    await record.import();
    await record.reload({ include: [RecordProperty] });
    await record.update({ state: "ready" });
    await record.updateGroupMembership();
    const groups = await record.$get("groups");

    return {
      success: true,
      record: await record.apiData(),
      groups: await Promise.all(groups.map((group) => group.apiData())),
    };
  }
}

export class RecordExport extends CLSAction {
  permission: {
    topic: ActionPermissionTopic;
    mode: ActionPermissionMode;
  };

  constructor() {
    super();
    this.name = "record:export";
    this.description = "fully export a record";
    this.outputExample = {};
    this.permission = { topic: "record", mode: "write" };
    this.middleware = ["authenticated-action"];
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({
    params,
  }: {
    params: {
      id: string;
      properties: Record<string, (string | number | boolean | Date)[]>;
      removedProperties: string[];
    };
  }) {
    const record = await GrouparooRecord.findById(params.id);
    const exports = await record.export(true);

    return {
      success: true,
      record: await record.apiData(),
      exports: await Promise.all(exports.map((e) => e.apiData())),
    };
  }
}

export class RecordView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "record:view";
    this.description = "view a record and members";
    this.outputExample = {};
    this.permission = { topic: "record", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const record = await GrouparooRecord.findById(params.id);
    const groups = await record.$get("groups");
    return {
      record: await record.apiData(),
      groups: await Promise.all(groups.map((group) => group.apiData())),
    };
  }
}

export class RecordDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "record:destroy";
    this.description = "destroy a record";
    this.outputExample = {};
    this.permission = { topic: "record", mode: "write" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const record = await GrouparooRecord.findById(params.id);
    await record.destroy();

    await ConfigWriter.run();

    return { success: true };
  }
}
