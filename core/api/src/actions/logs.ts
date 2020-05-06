import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Log } from "../models/Log";

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
      limit: { required: true, default: 1000, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      order: {
        required: true,
        default: [
          ["createdAt", "desc"],
          ["topic", "desc"],
        ],
      },
    };
  }

  async run({ response, params }) {
    const search = {
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where: {},
    };

    if (params.topic) {
      search.where["topic"] = params.topic;
    }
    if (params.verb) {
      search.where["verb"] = params.verb;
    }
    if (params.ownerGuid) {
      search.where["ownerGuid"] = params.ownerGuid;
    }

    const logs = await Log.findAll(search);
    response.logs = await Promise.all(logs.map((log) => log.apiData()));

    response.total = await Log.count(search);
  }
}
