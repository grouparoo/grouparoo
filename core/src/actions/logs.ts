import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { RecordProperty } from "../models/RecordProperty";
import { Log } from "../models/Log";
import { Op } from "sequelize";
import { APIData } from "../modules/apiData";

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
      ownerId: { required: false },
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      order: {
        required: false,
        formatter: APIData.ensureObject,
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
    if (params.ownerId) {
      const ownerIds = [params.ownerId];

      // in the case we are dealing with a record
      const recordProperties = await RecordProperty.findAll({
        where: { recordId: params.ownerId },
      });
      recordProperties.forEach((prop) => ownerIds.push(prop.id));

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
