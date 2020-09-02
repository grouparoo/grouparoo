import { api, id, task, Action, actionheroVersion } from "actionhero";
import path from "path";
import { plugin } from "../modules/plugin";
const packageJSON = require(path.join(
  __dirname,
  "..",
  "..",
  "..",
  "package.json"
));

// These values are probably good starting points, but you should expect to tweak them for your application
const maxMemoryAlloted = process.env.maxMemoryAlloted || 500;

export class PublicStatus extends Action {
  constructor() {
    super();
    this.name = "status:public";
    this.description = "A basic status endpoint";
    this.outputExample = {};
  }

  async run({ response }) {
    response.status = "ok";
  }
}

export class PrivateStatus extends Action {
  constructor() {
    super();
    this.name = "status:private";
    this.description =
      "I will return detailed information about this API server and Resque";
    this.outputExample = {};
  }

  async checkRam(data) {
    const consumedMemoryMB =
      Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100;
    data.response.consumedMemoryMB = consumedMemoryMB;
    if (consumedMemoryMB > maxMemoryAlloted) {
      data.response.nodeStatus = data.connection.localize("Unhealthy");
      data.response.problems.push(
        data.connection.localize([
          "Using more than {{maxMemoryAlloted}} MB of RAM",
          { maxMemoryAlloted: maxMemoryAlloted },
        ])
      );
    }
  }

  async checkResqueQueues(data) {
    const details = await task.details();
    let length = 0;
    Object.keys(details.queues).forEach((q) => {
      length += details.queues[q].length;
    });

    data.response.resqueTotalQueueLength = length;
    const maxResqueQueueLength: number =
      parseInt(
        (await plugin.readSetting("core", "runs-profile-batch-size")).value
      ) * 10;

    if (length > maxResqueQueueLength) {
      data.response.nodeStatus = data.connection.localize("Unhealthy");
      data.response.problems.push(
        data.connection.localize([
          "Resque queue length over {{maxResqueQueueLength}} jobs",
          { maxResqueQueueLength: maxResqueQueueLength },
        ])
      );
    }
  }

  async run(data) {
    data.response.uptime = new Date().getTime() - api.bootTime;
    data.response.nodeStatus = data.connection.localize("Healthy");
    data.response.problems = [];

    data.response.id = id;
    data.response.actionheroVersion = actionheroVersion;
    data.response.name = packageJSON.name;
    data.response.description = packageJSON.description;
    data.response.version = packageJSON.version;

    await this.checkRam(data);
    await this.checkResqueQueues(data);
  }
}
