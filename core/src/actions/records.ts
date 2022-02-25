import { Action, config, ParamsFrom } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { RecordProperty } from "../models/RecordProperty";
import { GrouparooModel } from "../models/GrouparooModel";
import { Group } from "../models/Group";
import { internalRun } from "../modules/internalRun";
import Sequelize, { Op, WhereAttributeHash } from "sequelize";
import { ConfigWriter } from "../modules/configWriter";
import { RecordOps } from "../modules/ops/record";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { CLS } from "../modules/cls";
import { AsyncReturnType } from "type-fest";
import { DestinationOps } from "../modules/ops/destination";
import { TeamMember } from "../models/TeamMember";

export class RecordsList extends AuthenticatedAction {
  name = "records:list";
  description = "list all the records in a group";
  outputExample = {};
  permission: ActionPermission = { topic: "record", mode: "read" };
  inputs = {
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
      formatter: APIData.ensureArray,
      default: [["createdAt", "asc"]],
    },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<RecordsList> }) {
    const { records, total } = await RecordOps.search(params);
    return {
      total,
      records: await Promise.all(records.map((record) => record.apiData())),
    };
  }
}

export class RecordAutocompleteRecordProperty extends AuthenticatedAction {
  name = "records:autocompleteRecordProperty";
  description = "return matching record property values";
  outputExample = {};
  permission: ActionPermission = { topic: "record", mode: "read" };
  inputs = {
    propertyId: { required: true },
    match: { required: true },
    limit: { required: false, default: 25, formatter: APIData.ensureNumber },
    offset: { required: false, default: 0, formatter: APIData.ensureNumber },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [["rawValue", "asc"]],
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<RecordAutocompleteRecordProperty>;
  }) {
    const op = config.sequelize.dialect === "postgres" ? Op.iLike : Op.like;
    const rawValueWhereClause: WhereAttributeHash = {
      [op]: `%${params.match}%`,
    };

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
  name = "records:importAndUpdate";
  description = "create a run to import and update every record";
  outputExample = {};
  permission: ActionPermission = { topic: "record", mode: "write" };
  inputs = {} as const;

  async runWithinTransaction({
    session,
  }: {
    session: { teamMember: TeamMember };
  }) {
    const run = await internalRun("teamMember", session.teamMember.id);
    return { run: await run.apiData() };
  }
}

export class RecordCreate extends AuthenticatedAction {
  name = "record:create";
  description = "create a record";
  outputExample = {};
  permission: ActionPermission = { topic: "record", mode: "write" };
  inputs = {
    modelId: { required: true },
    properties: {
      required: false,
      default: {},
      formatter: APIData.ensureObject,
    },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<RecordCreate> }) {
    const record = new GrouparooRecord({ modelId: params.modelId });
    await record.save();

    if (params.properties) {
      await record.addOrUpdateProperties(params.properties);
    }

    await record.markPending();
    await record.import();
    await record.updateGroupMembership();
    await record.update({ state: "ready" });

    const properties = await record.getProperties();
    let allPropertiesNull = true;
    for (const key of Object.keys(params.properties)) {
      if (properties[key].values.find((v) => !!v)) allPropertiesNull = false;
    }

    if (allPropertiesNull) {
      throw new Error(
        `Record cannot be created because the primary source does not contain the values (${JSON.stringify(
          params.properties
        )})`
      );
    }

    const groups = await record.$get("groups");
    const destinations = await DestinationOps.relevantFor(record, groups);

    await ConfigWriter.run();

    return {
      record: await record.apiData(),
      groups: await Promise.all(groups.map((group) => group.apiData())),
      destinations: await Promise.all(
        destinations.map((destination) => destination.apiData(false, false))
      ),
    };
  }
}

export class RecordImport extends Action {
  name = "record:import";
  description = "fully import a record";
  outputExample = {};
  permission: ActionPermission = { topic: "record", mode: "write" };
  middleware = ["authenticated-action"];
  inputs = {
    id: { required: true },
  } as const;

  async run({ params }: { params: ParamsFrom<RecordImport> }) {
    let record: GrouparooRecord;
    let response: {
      success: boolean;
      record: AsyncReturnType<GrouparooRecord["apiData"]>;
      groups: AsyncReturnType<Group["apiData"]>[];
    };

    await CLS.wrap(async () => {
      record = await GrouparooRecord.findById(params.id);
    });

    const responses = await RecordOps.opportunisticallyImportAndUpdateInline([
      record,
    ]);
    if (!responses[0].success) throw new Error(responses[0].error);

    await CLS.wrap(async () => {
      await record.reload({ include: [RecordProperty] });
      const groups = await record.$get("groups");

      response = {
        success: true,
        record: await record.apiData(),
        groups: await Promise.all(groups.map((group) => group.apiData())),
      };
    });

    return response;
  }
}

export class RecordsImport extends Action {
  name = "records:import";
  description = "fully import all records associated with a model";
  outputExample = {};
  permission: ActionPermission = { topic: "record", mode: "write" };
  middleware = ["authenticated-action"];
  inputs = {
    modelId: { required: true },
  } as const;

  async run({ params }: { params: ParamsFrom<RecordsImport> }) {
    let model: GrouparooModel;
    let records: GrouparooRecord[];

    await CLS.wrap(async () => {
      model = await GrouparooModel.findById(params.modelId);
      records = await GrouparooRecord.findAll({
        where: { modelId: model.id },
      });
    });

    const responses = await RecordOps.opportunisticallyImportAndUpdateInline(
      records
    );
    return { responses };
  }
}

export class RecordExport extends AuthenticatedAction {
  name = "record:export";
  description = "fully export a record";
  outputExample = {};
  permission: ActionPermission = { topic: "record", mode: "write" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<RecordExport> }) {
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
  name = "record:view";
  description = "view a record and members";
  outputExample = {};
  permission: ActionPermission = { topic: "record", mode: "read" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<RecordView> }) {
    const record = await GrouparooRecord.findById(params.id);
    const groups = await record.$get("groups");
    const destinations = await DestinationOps.relevantFor(record, groups);
    return {
      record: await record.apiData(),
      groups: await Promise.all(groups.map((group) => group.apiData())),
      destinations: await Promise.all(
        destinations.map((destination) => destination.apiData(false, false))
      ),
    };
  }
}

export class RecordDestroy extends AuthenticatedAction {
  name = "record:destroy";
  description = "destroy a record";
  outputExample = {};
  permission: ActionPermission = { topic: "record", mode: "write" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<RecordDestroy>;
  }) {
    const record = await GrouparooRecord.findById(params.id);
    await record.destroy();

    await ConfigWriter.run();

    return { success: true };
  }
}
