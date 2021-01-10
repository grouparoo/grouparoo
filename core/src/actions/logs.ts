import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { ProfileProperty } from "../models/ProfileProperty";
import { Log } from "../models/Log";
import { Op } from "sequelize";

export class LogsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "logs:list";
    this.description = "list all the log entries";
    this.outputExample = {};
    this.permission = { topic: "log", mode: "read" };
    this.inputs = {
      topic: { required: false },
      verb: { required: false },
      ownerGuid: { required: false },
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: false,
        default: [
          ["createdAt", "desc"],
          ["topic", "desc"],
        ],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const search = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where: {},
    };

    if (params.topic) search.where["topic"] = params.topic;
    if (params.verb) search.where["verb"] = params.verb;
    if (params.ownerGuid) {
      const ownerGuids = [params.ownerGuid];

      if (params.ownerGuid.match(/^pro_/)) {
        const profileProperties = await ProfileProperty.findAll({
          where: { profileGuid: params.ownerGuid },
        });
        profileProperties.forEach((prop) => ownerGuids.push(prop.guid));
      }

      search.where["ownerGuid"] = { [Op.in]: ownerGuids };
    }

    const total = await Log.count(search);
    const logs = await Log.findAll(search);

    return { total, logs: await Promise.all(logs.map((log) => log.apiData())) };
  }
}
