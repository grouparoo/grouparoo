import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Log } from "../models/Log";
import { Op, WhereAttributeHash } from "sequelize";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";

export class LogsList extends AuthenticatedAction {
  name = "logs:list";
  description = "list all the log entries";
  outputExample = {};
  permission: ActionPermission = { topic: "log", mode: "read" };
  inputs = {
    topic: { required: false },
    verb: { required: false },
    ownerId: { required: false },
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [
        ["createdAt", "desc"],
        ["topic", "desc"],
      ],
    },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<LogsList> }) {
    const search = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where: {} as WhereAttributeHash,
    };

    let topic = params.topic;
    if (topic) {
      if (topic === "record") topic = "grouparooRecord";
      search.where["topic"] = topic;
    }

    if (params.verb) search.where["verb"] = params.verb;
    if (params.ownerId) {
      const ownerIds = [params.ownerId];
      search.where["ownerId"] = { [Op.in]: ownerIds };
    }

    const total = await Log.count(search);
    const logs = await Log.findAll(search);

    return {
      total,
      logs: await Promise.all(logs.map((log) => log.apiData())),
    };
  }
}
