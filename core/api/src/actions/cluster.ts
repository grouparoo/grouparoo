import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Op } from "sequelize";

import { App } from "../models/App";
// import { ApiKey } from "../models/ApiKey";
import { Destination } from "../models/Destination";
import { DestinationGroupMembership } from "../models/DestinationGroupMembership";
// import { File } from "../models/File";
import { Export } from "../models/Export";
import { Event } from "../models/Event";
import { EventData } from "../models/EventData";
import { ExportImport } from "../models/ExportImport";
import { ExportRun } from "../models/ExportRun";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { GroupRule } from "../models/GroupRule";
import { Import } from "../models/Import";
import { Log } from "../models/Log";
import { Mapping } from "../models/Mapping";
import { Option } from "../models/Option";
// import { Permission } from "../models/Permission";
import { Profile } from "../models/Profile";
import { ProfileProperty } from "../models/ProfileProperty";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import { ProfilePropertyRuleFilter } from "../models/ProfilePropertyRuleFilter";
import { Run } from "../models/Run";
import { Schedule } from "../models/Schedule";
// import { Setting } from "../models/Setting";
import { SetupStep } from "../models/SetupStep";
import { Source } from "../models/Source";
// import { Team } from "../models/Team";
// import { TeamMember } from "../models/TeamMember";

const models = [
  // ApiKey,
  App,
  Destination,
  DestinationGroupMembership,
  Event,
  EventData,
  Export,
  ExportImport,
  ExportRun,
  // File,
  Group,
  GroupMember,
  GroupRule,
  Import,
  // Log,
  Mapping,
  Option,
  // Permission,
  Profile,
  ProfileProperty,
  ProfilePropertyRule,
  ProfilePropertyRuleFilter,
  Run,
  Schedule,
  // Setting,
  Source,
  // Team,
  // TeamMember,
];

export class ClusterReset extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "cluster:destroy";
    this.description = "erase most all of the data in this grouparoo cluster";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" }; // TODO: do we need more elaborate checks?
    this.inputs = {};
  }

  async run({ response, session: { teamMember } }) {
    response.success = false;
    const counts = {};

    for (const i in models) {
      const model = models[i];
      const modelName = model.name;
      const count = await model.count();

      if (model === App) {
        await model
          .scope(null)
          .destroy({ where: { type: { [Op.ne]: "events" } } });

        const models = await model.findAll();
        await Promise.all(
          // @ts-ignore
          models.map((m) => m.update({ state: "draft" }, { hooks: false }))
        );
      } else {
        await model.destroy({ truncate: true, force: true });
      }

      counts[modelName] = count;

      await Log.create({
        topic: "cluster",
        verb: "reset",
        message: `erased ${count} instances of ${modelName}`,
        ownerGuid: teamMember.guid,
        data: { count },
      });
    }

    await SetupStep.update({ complete: false }, { where: { complete: true } });

    await Log.create({
      topic: "cluster",
      verb: "reset",
      message: "Grouparoo Cluster Reset",
      ownerGuid: teamMember.guid,
      data: { counts },
    });

    response.counts = counts;
    response.success = true;
  }
}
