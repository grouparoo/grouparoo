import { api, id, task, actionheroVersion } from "actionhero";
import path from "path";
import { plugin } from "../modules/plugin";
import { Setting } from "../models/Setting";
import { CLSAction } from "../classes/actions/clsAction";

const packageJSON = require(path.join(__dirname, "..", "..", "package.json"));

// These values are probably good starting points, but you should expect to tweak them for your application
const maxMemoryAlloted = process.env.maxMemoryAlloted || 500;

export class PublicStatus extends CLSAction {
  constructor() {
    super();
    this.name = "status:public";
    this.description = "A basic status endpoint";
    this.permission = { topic: "system", mode: "read" };
    this.outputExample = {};
  }

  async runWithinTransaction({ response }) {
    response.status = "ok";
  }
}

export class PrivateStatus extends CLSAction {
  constructor() {
    super();
    this.name = "status:private";
    this.description =
      "I will return detailed information about this API server and Resque";
    this.outputExample = {};
  }

  async checkRam(problems: string[]) {
    const consumedMemoryMB =
      Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100;

    if (consumedMemoryMB > maxMemoryAlloted) {
      problems.push(`Using more than ${maxMemoryAlloted} MB of RAM`);
    }

    return { consumedMemoryMB };
  }

  async checkResqueQueues(problems: string[]) {
    const details = await task.details();
    let length = 0;
    Object.keys(details.queues).forEach((q) => {
      length += details.queues[q].length;
    });

    const maxResqueQueueLength: number =
      parseInt(
        (await plugin.readSetting("core", "runs-profile-batch-size")).value
      ) * 10;

    if (length > maxResqueQueueLength) {
      problems.push(`Resque queue length over ${maxResqueQueueLength} jobs`);
    }

    return { resqueTotalQueueLength: length };
  }

  async runWithinTransaction() {
    const problems: string[] = [];

    const clusterNameSetting = await Setting.findOne({
      where: { pluginName: "core", key: "cluster-name" },
    });

    const { consumedMemoryMB } = await this.checkRam(problems);
    const { resqueTotalQueueLength } = await this.checkResqueQueues(problems);

    return {
      clusterName: clusterNameSetting.value,
      id,
      actionheroVersion,
      packageName: packageJSON.name,
      description: packageJSON.description,
      version: packageJSON.version,
      uptime: new Date().getTime() - api.bootTime,
      nodeStatus: problems.length === 0 ? "Healthy" : "Unhealthy",
      problems,
      resqueTotalQueueLength,
      consumedMemoryMB,
    };
  }
}
